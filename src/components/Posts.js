import { useState } from 'react'; 
import Post from './Post.js'
import AddPostForm from './AddPostForm.js'
import './Posts.css'
import { v4 as uuidv4 } from 'uuid'

const Posts = ()=>{
    const [posts, setPosts] = useState([
        {id: 1, text: "This is the first post"},
        {id: 2, text: "This is the second post"}
    ])
    const [isAddPost, setIsAddPost] = useState(false);
    const [tempNewPost, setTempNewPost] = useState("")

    const handleAddPost = ()=>{
        const newPost = {id: uuidv4(), text: tempNewPost}
        setPosts(prevPosts => [...prevPosts, newPost])
        setIsAddPost(false)
        setTempNewPost("")
    }
    const handleNewPost = (tempNewPost) =>{
        setTempNewPost(tempNewPost);
    }

    const handleDeletePost = (id)=>{
        setPosts(prevPosts => prevPosts.filter(post=> post.id !== id))
    }

    return(
        <>
            
            {!isAddPost &&
            <div className='posts'>
                <button className="button" onClick={()=> setIsAddPost(!isAddPost)}>Add Post</button>
                <Post posts={posts} delete={handleDeletePost} />
            </div>
                
            }
            {isAddPost &&
            <div className='posts'>
                <button className="button" onClick={()=> setIsAddPost(!isAddPost)}>Cancel</button>
                <br/>
                <AddPostForm onSubmit={handleAddPost} handleNewPost={handleNewPost} currentText={tempNewPost}/>
            </div>
                
            }

        </>
    )
}

export default Posts;

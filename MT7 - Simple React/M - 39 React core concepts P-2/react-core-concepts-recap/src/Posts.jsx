import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post";
import './Post.css'

export default function Posts() {
    const [Posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))

    }, [])
    return (
        <div className="posts-box">
            <h3>Posts : {Posts.length}</h3>
            {
                Posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}
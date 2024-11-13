import './Post.css'
export default function Post({post}) {
    const {body, id, title, userId} = post
    return (
        <div className="post-box">
            <h4>Title :{title} </h4>
            <p>Post ID : {id}</p>
            <p>User ID : {userId}</p>
            <p>Description : {body}</p>
        </div>
    )
}
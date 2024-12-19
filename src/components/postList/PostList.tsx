import Post from "../post/Post";
import NewPost from "../newpost/NewPost";
import classes from "./Post.module.css";
import Modal from "../Modal";
import { PostListProps } from "../../..";
import { useState } from "react";

type PostData = {
    body: string;
    author: string
}
export default function PostList({isPosting,onStopPosting}: PostListProps) {

    const [posts, setPosts] = useState<PostData[]>([]);

    const addPostHandler = (postData: PostData) =>{
        setPosts((prevState) => [postData, ...prevState])
    }

    return (
        <>
        {
        isPosting && (<Modal 
                    propHideModalHandler={onStopPosting}>
                    <NewPost 
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                    />
            </Modal>)
            
        }
        
        {posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post, index) =>(
                <Post key={index} author={post.author} body={post.body}/>
            ))}
        </ul>
        )}
        {
        posts.length === 0 && <div style={{textAlign: "center", color: "whitesmoke"}}>
            <h2>There are no posts yet.</h2>
            <p>Strats adding some!</p>
            </div>}
        </>
    )
}

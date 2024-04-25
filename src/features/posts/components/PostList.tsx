import { useParams, Link } from "react-router-dom";
import { getPosts } from "@/features/posts/api/postsApi";
import { getPostsByUserId } from "@/features/users/api/usersApi";
import { useState, useEffect } from "react";
import type { Post } from "@/features/posts/postType";


const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { userId } = useParams();
  console.log("userId", userId);

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId).then((data: Post[]) => {
        setPosts(data);
      });
    } else {
      getPosts().then((data) => {
        setPosts(data);
      });
    }
  }, [userId]);
  
  console.log("posts, ", posts);

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => {
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
          </Link> 
        );
      })}
    </div>
  );
};

export default PostList;

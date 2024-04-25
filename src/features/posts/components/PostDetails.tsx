import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import type {Post} from '../postType';
import {getPostById} from '../api/postsApi';


const PostDetails = () => {

  const [post, setPost] = useState<Post | null>(null);

  const { postId } = useParams();

  useEffect(() => {
    // Fetch post by postId
    if (typeof postId === 'string') {
      getPostById(postId).then((data) => {
        setPost(data);
      });
    }

  }, [postId]);



  return (
    <div>
      <h3>Post Detail</h3>
      <p>{post?.title}</p>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetails;

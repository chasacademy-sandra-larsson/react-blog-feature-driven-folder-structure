import {createPost} from '../api/postsApi';

const CreatePost = () => {

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    console.log(title, content);

    // Call createPost function from postsApi
     createPost({ title, content }).then((data) => {
         console.log(data);
      
     })}



    return (
      <div>
        <h2>Create New Posts</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CreatePost;
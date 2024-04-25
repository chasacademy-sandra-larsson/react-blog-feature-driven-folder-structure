
const BASE_URL = 'http://localhost:8000/posts';

export async function getPosts() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function getPostById(postId: string) {
  const response = await fetch(`${BASE_URL}/${postId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
}

// Post request to create a new post
export async function createPost(post: { title: string; content: string }) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
}
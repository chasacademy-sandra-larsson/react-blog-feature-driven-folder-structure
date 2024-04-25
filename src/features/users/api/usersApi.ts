
const BASE_URL = 'http://localhost:8000/users';

export async function getUsers() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}

export async function getUserById(userId: string) {
  const response = await fetch(`${BASE_URL}/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json();
}

export async function getPostsByUserId(userId: string) {
  const response = await fetch(`${BASE_URL}/${userId}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
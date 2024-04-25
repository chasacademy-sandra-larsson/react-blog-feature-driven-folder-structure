import { useParams, Link } from 'react-router-dom';
import { getUserById } from '../api/usersApi';
import { useEffect, useState } from 'react';
import type { User } from '../userType';

const UserDetail = () => {


  const [user, setUser] = useState<User | null>(null);

  const { userId } = useParams();

  useEffect(() => {
    if (typeof userId === 'string') {
    getUserById(userId).then((data) => {
      setUser(data);
    });
  }
  }, [userId]);

  return (
    <div>
      <h3>User Details</h3>
      <p><Link to={`/users/${user?.id}/posts`}>Posts created by user {user?.name}</Link></p>
      <p><Link to="/users">Back to Users</Link></p>
    </div>
  );
};

export default UserDetail;

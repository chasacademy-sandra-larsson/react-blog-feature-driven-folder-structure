import {getUsers} from '../api/usersApi';
import {useState, useEffect} from 'react';
import type {User} from '../userType';
import { Link } from 'react-router-dom';

const UserList = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  console.log(users);

  return (
    <div>
      <h1>User List</h1>
        <ul>
            {users.map((user: User) => (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
            ))}
        </ul>
    </div>
  );
};

export default UserList;
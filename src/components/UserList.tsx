// src/components/UserList.tsx
import React from 'react';
import { User } from '../types';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <img src={user.picture} alt={user.name} />
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

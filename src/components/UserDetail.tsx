// src/components/UserDetail.tsx
import React from 'react';
import { UserDetails } from '../types';

interface UserDetailProps {
  user: UserDetails;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location.street}, {user.location.city}, {user.location.state}, {user.location.postcode}</p>
    </div>
  );
};

export default UserDetail;

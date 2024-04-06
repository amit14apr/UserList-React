import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import UserDetail from './UserDetail';
import { UserDetails } from '../types';

const fetchUser = async (userId: string): Promise<UserDetails> => {
  const response = await fetch(`https://randomuser.me/api/?results=1&seed=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  }
  const data = await response.json();
  const user = data.results[0];
  return {
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.large,
    gender: user.gender,
    phone: user.phone,
    location: {
      street: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      postcode: user.location.postcode,
    },
  };
};

const UserDetailContainer: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>(); // Use optional chaining here
  const { data: user, isLoading, isError } = useQuery<UserDetails>(['user', userId], () => fetchUser(userId || '')); // Use default value or handle undefined

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching user details</div>;

  return <UserDetail user={user!} />;
};

export default UserDetailContainer;

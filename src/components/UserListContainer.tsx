import React from 'react';
import { useQuery } from 'react-query';
import UserList from './UserList';
import { User } from '../types';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.results.map((user: any) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.medium,
  }));
};

const UserListContainer: React.FC = () => {
  const { data: users, isLoading, isError } = useQuery<User[]>('users', fetchUsers);

  if (isLoading) return <><div>Loading...</div></>;
  if (isError) return <><div>Error fetching data</div></>;

  return <><UserList users={users!} /></>;
};

export default UserListContainer;

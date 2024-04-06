import React, { useState } from 'react';
import { useQuery } from 'react-query';
import UserList from './UserList';
import { User } from '../types';

const fetchUsers = async (searchQuery: string): Promise<User[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=10&nat=us&name=${searchQuery}`);
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

const UserSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: users, isLoading, isError } = useQuery<User[]>(['users', searchQuery], () => fetchUsers(searchQuery));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <UserList users={users!} />
    </div>
  );
};

export default UserSearch;

import React from 'react';
import { useQuery } from 'react-query';
import { User } from './types';
import './App.css';
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

const UserDashboard: React.FC = () => {
  const { data: users, isLoading, isError } = useQuery<User[]>('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className='App-header'>
      <h1 className='App-link'>User Dashboard</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;

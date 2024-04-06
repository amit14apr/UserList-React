import React from 'react';
import { useInfiniteQuery } from 'react-query';
import UserList from './UserList';
import { User } from '../types';

const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://randomuser.me/api/?results=10&page=${pageParam}`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return {
    users: data.results.map((user: any) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.medium,
    })),
    nextPage: pageParam + 1,
  };
};

const InfiniteUserList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery('users', fetchUsers, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const allUsers = data?.pages.flatMap((page) => page.users) ?? [];

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <UserList users={allUsers} />
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetching}>
          {isFetching ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default InfiniteUserList;

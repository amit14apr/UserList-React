// src/components/UserList.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

test('renders user list', () => {
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', picture: 'avatar.jpg' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', picture: 'avatar.jpg' },
  ];
  const { getByText } = render(<UserList users={users} />);
  const user1Element = getByText(/John Doe/);
  const user2Element = getByText(/Jane Smith/);
  expect(user1Element).toBeInTheDocument();
  expect(user2Element).toBeInTheDocument();
});

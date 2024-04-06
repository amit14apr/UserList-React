import styled from 'styled-components';

export const StyledUserList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledUserListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  img {
    margin-right: 10px;
    border-radius: 50%;
  }

  h3 {
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

// Use these styled components in your components for styling

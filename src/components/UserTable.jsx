import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ users, requestSort, sortConfig, setSelectedUser, setShowModal }) => {

  const handleRowDoubleClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('firstName')}
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('age')}
            >
              Age
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('gender')}
            >
              gender
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('phone')}
            >
              phone
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('address')}
            >
              address
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={index} user={user} onDoubleClick={() => handleRowDoubleClick(user)} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

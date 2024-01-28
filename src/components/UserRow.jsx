import React from 'react';

const UserRow = ({ user, onDoubleClick }) => {
    return (
      <tr onDoubleClick={onDoubleClick}>
        <td>{user.firstName} {user.lastName} {user.maidenName}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        <td>{user.address.city} {user.address.address}</td>
      </tr>
    );
};

export default UserRow;
import React from 'react';
import classes from './MyModal.module.scss'

const Modal = ({ user, visible, setShowModal }) => {

    const rootClasses = [classes.myModal]
    if (visible) {
      rootClasses.push(classes.active)
    }
    return (
      <div className={rootClasses.join(' ')} onClick={() => setShowModal(false)}>
        <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
          <h2>Данные о пользователе</h2>
          <p>Full Name: {user.firstName} {user.lastName} {user.maidenName}</p>
          <p>Age: {user.age}</p>
          <p>Address: {user.address.city}, {user.address.address}</p>
          <p>Height: {user.height}</p>
          <p>Weight: {user.weight}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
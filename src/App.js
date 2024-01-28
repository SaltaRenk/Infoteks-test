import React from "react";
import { useState, useEffect } from "react";
import './styles/App.scss';
import UserTable from "./components/UserTable";
import UserFilter from "./components/UserFilter";
import useSortableData from "./components/hooks/UseSortableData";
import MyModal from "./components/UI/MyModal/MyModal"

function App() {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]); 
  const [filter, setFilter] = useState({sort: '', query: ''})
  const { items: sortedUsers, requestSort, sortConfig } = useSortableData(users); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data.users);
        setOriginalUsers(data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
        {/* Модальное окно, открыается двойным кликом по строчке таблицы, закрывается при нажатии на затемненную область */}
       {showModal && <MyModal visible={true} user={selectedUser}   setShowModal={setShowModal}/>}
      <h2>Таблица пользователей</h2>
      {/* Компонент для поиска (и добавления других подобных компонентов) */}
      <UserFilter filter={filter} setFilter={setFilter} setUsers={setUsers}  originalUsers={originalUsers}/>
      {/* Декомпозиция таблицы */}
      <UserTable 
      users={sortedUsers} 
      requestSort={requestSort} 
      sortConfig={sortConfig}
      setSelectedUser={setSelectedUser}
      setShowModal={setShowModal}
      /> 
    </div>
  );
}

export default App;

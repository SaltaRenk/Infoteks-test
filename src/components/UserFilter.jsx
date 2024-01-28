import React from 'react';
import { useEffect } from 'react';
import MyInput from './UI/Input/MyInput';

//Поиск по таблице
const UserFilter = ({filter, setFilter, setUsers, originalUsers}) => {

    useEffect(() => {
        // Отправляем запрос на сервер при изменении значения filter.query
        const searchUsers = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${filter.query}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data.users); // Обновляем данные в таблице
          } catch (error) {
            console.error('Error searching data:', error);
          }
        };
    
        // Вызываем функцию для отправки запроса на сервер
        if (filter.query !== '') {
            searchUsers();
            }
      }, [filter.query, setUsers]);

    useEffect(() => {
        if (filter.query === '') { 
            setUsers(originalUsers); // восстанавливаем изначальные данные при пустом запросе
        }
      }, [filter.query, originalUsers, setUsers]);

    return (
    <MyInput 
        value={filter.query} 
        onChange={e => setFilter({...filter, query: e.target.value})} 
        placeholder="Поиск..."
      />
    );
};


export default UserFilter;


import './userList.css'
import React, { useState, useEffect } from 'react';
import { getUser, deleteUser } from '../../Componentes/services/userServices';



function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getUser();
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    const updatedUsers= users.filter((user) => user._id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>LISTA DE USUÁRIOS</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            Nome: {user.nome}, 
            Email: {user.email},
            CPF: {user.CPF},
            CEP: {user.CEP}

            

            <button onClick={() => handleDelete(user._id)}>Deletar</button>
          </li>
          
        ))}
      </ul>
      {console.log(users)} {}
    </div>
  );
}

export default UserList;
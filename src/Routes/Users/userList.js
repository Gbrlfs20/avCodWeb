


import React, { useState, useEffect } from 'react';
import { getUser } from '../../Componentes/services/userServices';


function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getUser();
      setUsers(userData );
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            nome: {user.nome}, 
            email: {user.email},
            CPF: {user.CPF},
            CEP: {user.CEP}
          </li>
        ))}
      </ul>
      {console.log(users)} {}
    </div>
  );
}

export default UserList;
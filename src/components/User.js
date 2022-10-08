import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import UserAPI from '../apis/User';

export default function User() {
  const [users, setUsers] = useState({
    isLoading: true,
    data: [],
  });
  let history = useHistory();

  const handleUpdate = () => {
    alert('updated');
    axios
      .post('https://crudcrud.com/api/6d0beff0ffef46d8bf03e5dc42cfc53f/jugs', {
        name: 'jagan',
        age: 32,
        colour: 'blue',
      })
      .then((response) => {
        alert('updated2');
        console.log(response);
      });
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    history.push('/');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await UserAPI.getAll();
      const { data: users } = data;
      setUsers({
        isLoading: false,
        data: users,
      });
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.isLoading ? (
        'Loading...'
      ) : (
        <>
          <button onClick={handleUpdate}>Update</button>
          <br />
          <br />
          <button onClick={navigateHome}>Redirect to home</button>
          <br />
          <br />
          <ol>
            {users.data.map((user) => (
              <li key={user.id}>
                {user.last_name} {user.first_name}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

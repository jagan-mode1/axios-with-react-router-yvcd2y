import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';

const Welcome = () => {
  useEffect(() => {}, []);
  let history = useHistory()

  const handleUpdate = () => {
    alert('updated');
    axios
      .put(
        'https://crudcrud.com/api/6d0beff0ffef46d8bf03e5dc42cfc53f/unicorns/63416e375e22f903e803e1a3',
        { name: 'jagan', age: 28, colour: 'blue' }
      )
      .then((response) => {
        alert('updated2');
        console.log(response);
      });
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome page</h1>
      <button onClick={handleUpdate}>Update</button>
      <br />
      <br />
      <button onClick={navigateHome}>Redirect to home</button>
    </div>
  );
};

export default Welcome;

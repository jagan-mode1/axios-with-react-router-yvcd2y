import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import User from './components/User';
import Home from './components/Home';

const App = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get('https://crudcrud.com/api/6d0beff0ffef46d8bf03e5dc42cfc53f/unicorns')
      .then((response) => {
        setEmployee(response.data);
      });
  }, []);

  const data = { name: 'jagan', age: 28, colour: 'blue' };
  const handleUpdate = () => {
    alert('updated');
    axios
      .put(
        'https://crudcrud.com/api/6d0beff0ffef46d8bf03e5dc42cfc53f/unicorns/63416e375e22f903e803e1a3',
        { name: 'jagan', age: 30, colour: 'blue' }
      )
      .then((response) => {
        alert('updated2');
        console.log(response);
      });
  };

  console.log('employee', employee);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <span onClick={handleUpdate}>Update</span>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

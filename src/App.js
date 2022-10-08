import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import User from './components/User';
import Home from './components/Home';
import Welcome from './components/Welcome';

const App = () => {
  const [employee, setEmployee] = useState('');

  useEffect(() => {
    axios
      .get('https://crudcrud.com/api/6d0beff0ffef46d8bf03e5dc42cfc53f/jugs')
      .then((response) => {
        console.log('response', response.data);
        const age = response.data[2].age;
        setEmployee(age > 30 ? true : false);
      });
  }, []);

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
              <Link to="/welcome">Welcome</Link>
            </li>
          </ul>
        </nav>
        {employee === true && (
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        )}
        {employee === false && (
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;

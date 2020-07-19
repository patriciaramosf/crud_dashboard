import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;

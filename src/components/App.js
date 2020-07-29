import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import Aside from './Aside';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { BrowserRouter as Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
                    <Header/>
                    <Aside/>
                    <UserList link="/create-user"
                              linkEdit="/edit-user/id"
                    />
          </Route>
          <Route exact path="/create-user">
                    <CreateUser link="/"
                    />
          </Route>
          <Route path="/edit-user/:id">
                  <EditUser/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
                    <Header/>
                    <UserList link="/createuser"
                    />
          </Route>
          <Route exact path="/createuser">
                    <CreateUser/>
          </Route>
          <Route path="/edituser">
                  <EditUser/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

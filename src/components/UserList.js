import React from 'react';
import Button from '@material-ui/core/Button';
/* import CreateUser from './CreateUser'; */
import { BrowserRouter as Router, Link } from "react-router-dom";

const UserList = (props) =>{
    
return(
    <div className="UserList">
        <Link to={props.link}>
            <Button variant="contained" color="secondary" className="buttonInfo">
                Add Info
            </Button>
        </Link>
    </div>
)
}

export default UserList;
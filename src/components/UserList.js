import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

const UserList = (props) =>{
    const { link, linkEdit } = props;
return(
    <div className="UserList">
        <div className="buttonGroup">
            <Link to={link}>
                <Button variant="contained" color="secondary" className="buttonAddInfo">
                    Add Info
                </Button>
            </Link>
            <Link to={linkEdit}>
                <Button variant="contained" color="secondary" className="buttonEditInfo">
                    Edit Info
                </Button>
            </Link>
        </div>
    </div>
)
}

export default UserList;
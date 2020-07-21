import React from 'react';
import {FormControl, Input, InputLabel, Fab, Button } from '@material-ui/core/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import Particles from 'react-particles-js';

const CreateUSer = (props) =>{
return(
    <div className="createUser">
        <Link to={props.link}>
            <Button variant="contained" color="secondary" className="goback">
                    Go back
            </Button>
        </Link>
        <form className="myForm">
            <FormControl>
                <InputLabel color="secondary" htmlFor="my-input">Email</InputLabel>
                <Input color="secondary" id="input inputEmail" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel color="secondary" htmlFor="my-input">Name</InputLabel>
                <Input color="secondary" id="input inputName" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel color="secondary" htmlFor="my-input">Film or book recommendation 🎥</InputLabel>
                <Input id="input inputBook" color="secondary" aria-describedby="my-helper-text" />
            </FormControl>
        </form>
        <Fab size="small" className="buttontoAdd" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
            color:{
                value:"#545a69"
            }
          }, 
        }} 
      /> 
    </div>
)
}

export default CreateUSer;


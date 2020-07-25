import React from 'react';
import {Button } from '@material-ui/core/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Particles from 'react-particles-js';
import FormContainer from './FormContainer';

const CreateUSer = (props) =>{
    const { link } = props;
    return(
        <div className="createUser">
            <Link to={link}>
                <Button variant="contained" color="secondary" className="goback">
                        Go back
                </Button>
            </Link>
            <FormContainer/>
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


import React , {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {FormControl, Input, InputLabel, Fab, } from '@material-ui/core/';

const FormContainer = () =>{
    const [inputEmail, changeEmailValue] = useState("");
    const [inputName, changeNameValue] = useState("");
    const [inputBook, changeBookValue] = useState("");
    return(
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
        <Fab size="small" className="buttontoAdd" color="secondary" aria-label="add" type="submit">
            <AddIcon />
        </Fab>
    </form>
    )}

export default FormContainer;
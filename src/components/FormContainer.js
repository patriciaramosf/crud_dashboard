import React , {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {FormControl, Input, InputLabel, Fab,} from '@material-ui/core/';

const FormContainer = () =>{
    const [values, setValues] = useState({email: '', name: '', book: ''});  
    const handleInputChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }
    return(
    <form className="myForm" onSubmit={handleSubmit}>
        <FormControl>
            <InputLabel color="secondary" htmlFor="my-input">Email</InputLabel>
            <Input  type="text"
                    color="secondary" 
                    id="inputEmail" 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
            />
        </FormControl>
        <FormControl>
            <InputLabel color="secondary" htmlFor="my-input">Name</InputLabel>
            <Input  type="text"
                    color="secondary"
                    id="inputName" 
                    name="name"
                    onChange={handleInputChange}
                    value={values.name}
            />
        </FormControl>
        <FormControl>
            <InputLabel color="secondary" htmlFor="my-input">Film or book recommendation 🎥</InputLabel>
            <Input  type="text" 
                    id="inputBook" 
                    color="secondary" 
                    name="book"
                    onChange={handleInputChange}
                    value={values.book}
            />
        </FormControl>
        <Fab size="small" className="buttontoAdd" color="secondary" type="submit">
            <AddIcon />
        </Fab>
    </form>
    )}
    
export default FormContainer;
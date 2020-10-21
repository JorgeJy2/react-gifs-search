import React,{useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = ({target: {value}})=> {
        console.log(value);
         setinputValue(value)
    };


    const handleSubmit = (e)=> {
       e.preventDefault();
       
       if(inputValue.trim().length > 2){
           console.log(e);

           setCategories(categories =>  [inputValue,...categories]);
           setinputValue('');
       }
    };


    return (
        <form onSubmit={handleSubmit}>
            {/* <p> Add Category</p> */}
            <input 
                placeholder="Search"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

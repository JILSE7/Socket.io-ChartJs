import {  useState } from 'react';


export const useForm = ( initialState ) => {
    
    const [values, setValues] = useState(initialState);
    console.log(values);
    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }, id) => {
        
        

        setValues(values.map(band =>{
            if(band.id === id ){
                band.name = target.value;
            }

            return band
        }));

    }

    return [ values, handleInputChange, reset, setValues ];

};
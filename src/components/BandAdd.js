import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import add from '../assets/211600_plus_circled_icon.svg'
import SocketContext from '../context/SocketContext';

const BandAdd = () => {
    
    const {socket} = useContext(SocketContext);
    const [valor, setValor] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // eslint-disable-next-line no-unused-expressions
        (valor.length >0 )? socket.emit('nueva-banda', {nombre: valor}) : null;
        setValor('');
    }

    return (
        <div className="text-center col-4 mt-5">
                <form className="d-flex flex-column align-items-center form-add" onSubmit={handleSubmit}>
                    <h3>Agregar Banda</h3>
                    <input value={valor} onChange={({target}) => setValor(target.value)}  placeholder={valor.length <=0 ?  "Escribe un nombre" : ""}/>
                    
                    <img src={add} alt="add"  className="logo" onClick={handleSubmit} />
                    
                </form>
        </div>
    )
}

export default BandAdd

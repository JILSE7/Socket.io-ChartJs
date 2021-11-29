import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';

import trash from '../assets/511562_trash can_delete_trash_wastebin_icon.svg';
import add1 from '../assets/add1.svg'
import SocketContext from '../context/SocketContext';


const BandList = () => {

    const {socket} = useContext(SocketContext);

    const [bandList, setBandList] = useState([]);

        //Effecto para escuhar las bandas
        useEffect(() => {
          socket.on('mandar-bandas', (bandas) => {
              setBandList(bandas);
          })
          //Dejar de escuchar el evento
          return () => socket.off('current-bands')
          }, [socket]);


    
    
    const handleInputChange = (e, id) =>{
        const nuevoNombre = e.target.value;
        
         setBandList((bandList)  => bandList.map(band => {
             if(band.id === id) band.name = nuevoNombre 
             return band
        }));
    }

    const cambiarNombreBanda = (id,nombre) =>socket.emit('cambiar-nombre', {id,nombre});
    const votarBanda = (id) => socket.emit('añadir-voto', {id});
    const borrarBanda = (id) => socket.emit('borrar-banda', {id});

    

    
        


    const crearRows = () => {

        return bandList.map((band) => (
                    <tr className="text-center align-middle" key={band.id}>
                        <td className="align-middle">
                                <img 
                                src={add1} alt="trash" className="trash" 
                                style={{cursor: 'pointer', border: "1px solid black", borderRadius: "99px"}}
                                onClick={() => votarBanda(band.id)}
                                />
                        </td>
                        <td>
                            <input value={band.name} name={band.name} onChange={(e) =>handleInputChange(e, band.id)}  onBlur={() =>cambiarNombreBanda(band.id, band.name)} />
                        </ td>
                        <td>
                            <h3 style={{margin:0}}>{band.votes}</h3>
                        </td>
                        <td><img src={trash} alt="trash" className="trash" onClick = {() => borrarBanda(band.id)}/></td>
                    </tr>
        ))

        }

    return (
        <div className="col-8 mt-3">
            <table className="table table-stripped">
                <thead>
                    <tr className="text-center">
                        <th>Añadir Voto</th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                            {
                                crearRows()
                                
                            }
                </tbody>
            </table>
        </div>
    )
}

export default BandList

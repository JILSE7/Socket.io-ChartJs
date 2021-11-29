
import {useEffect, useMemo, useState} from 'react'
import { io } from 'socket.io-client';



const useSocket = (serverPath) => {

    
    const socket = useMemo(() => io(serverPath,{ transports: ['websocket']} ) , [serverPath]) ;
    const [online, setOnline] = useState(false);
      

        //Efecto para escuchar el inicio de la conexion
        useEffect(() => {
            console.log('cambio el socket');
            setOnline(socket.connected);
        }, [socket])

        //Effecro para escuchar si se vuelve a conectar
        useEffect(() => {
            socket.on('connect', () => {
            setOnline(true);
            })
        }, [socket])

        //Effecto para escuchar la desconexión
        useEffect(() => {
            socket.on('disconnect', () => {
            setOnline(false);
            })
        }, [socket])


    return {
        socket,
        online,
        setOnline
    }
        
}

export default useSocket

import React, { useContext, useEffect, useState } from 'react'

import { Bar} from 'react-chartjs-2'

import SocketContext from '../context/SocketContext'



const BandChart = () => {
    
    const [bandList, setBandList] = useState([]);
    
    const {socket} = useContext(SocketContext);

     //Effecto para escuhar las bandas
     useEffect(() => {
        socket.on('mandar-bandas', (bandas) => {
            setBandList(bandas);
        })

        }, [socket]);

        console.log(bandList.map(band =>  band.votes));

    return (
        <div style={{width: "60%"}}>
        
        
         <Bar 
             data= {{
                 labels : bandList.map(band =>  band.name),
                 datasets: [{
                     label : 'Votos',
                     data: bandList.map(band =>  band.votes),
                     borderColor: 'rgba(17, 131, 0)',
                     backgroundColor: 'rgba(17, 131, 0, 0.2)',
                     borderWidth: 1
                 }]
             }}
             options={{
                indexAxis: 'y',
                responsive:true,
                maintainAspectRatio:true,
                events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                plugins: {
                    legend:{
                        position:'bottom'
                    },
                    title:{
                        display:true,
                        
                        position:'top'
                    },
                    
                
                },
                layout: {
                    autPadding: true
                },
                backgroundColor : "red"
                
            }}
         /> 
        </div>
        
        
        
    )
}

export default BandChart

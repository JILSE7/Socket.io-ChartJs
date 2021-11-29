
//SOCKET CLIENT
import { useContext } from 'react/cjs/react.development';

import logo from './assets/6613388_band_drums_loud_music_play_icon.svg';
import BandAdd from './components/BandAdd';
import BandChart from './components/BandChart';
import BandList from './components/BandList';
import SocketContext from './context/SocketContext';





function App() {
    
    const  {online} = useContext(SocketContext);
    


  
  

  return (

    <>
        <header className="d-flex justify-content-center align-items-center  ">
            <h1>BandNames</h1>  
            <img src={logo}  alt="bandNames" className="logo"/>
          </header>

          <main className="container"> 
              <section className="text-center mt-5 black status">
                <h1>Status - <span className={(online) ? "text-success" : "text-danger"}>{(online) ? "Online": "Offline"}</span></h1>
              </section>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <BandChart/>
                </div>
            </div>
              <section className="row">
                <BandList />
                <BandAdd/>
              </section>
          </main>    
    </>
  );
}

export default App;

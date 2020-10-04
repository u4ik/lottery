import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import logo from './assets/megamillogo.svg'
import './App.css';
import Generator from './components/Generator'
function App() {
  const appStyle = {
    // backgroundImage: `url(${backgroundImg})`,
    background: 'linear-gradient(0deg, royalblue, blue, darkblue ,navy, cyan 99%,lightblue )',
    // background: 'linear-gradient(0deg, black, white, lightgrey ,grey, darkgrey 99%,black )',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  }
  return (
    <Scrollbars style={{ width: '100vw', height: '100vh' }}>
    <div className="App" style={appStyle}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'2%',  filter:'drop-shadow(10px 10px 10px black)'}}>
          <img alt="MegaMillions Logo" src={logo} style={{ width: '30%', filter:'drop-shadow(4px 4px 2px white)',     backgroundColor: 'rgba(0, 45, 125, .1)',paddingLeft:'30%',paddingRight:'30%', paddingTop: '1%', paddingBottom: '1%' ,borderRadius: '3%'}} />
        </div>
        <Generator />
      </div>
    </div>
    </Scrollbars>
  );
}
export default App;

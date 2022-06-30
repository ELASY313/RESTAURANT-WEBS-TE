import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router ,Route } from 'react-router-dom';
import Anasayfa from "./pages/Anasayfa";
import Menü from "./pages/Menü";
import Hakkımızda from "./pages/Hakkımızda";
import İletişim from "./pages/İletişim";
import Map from "./components/Map";
import Data from "./components/Data"



  function App() {
    return (
  
        <><Router>
        <Navbar />

        {/*navbar linkleri çalıştırmak için router kullandım*/}
      
        <Route exact path="/" component ={Anasayfa}/>
        <Route exact path="/Menü" component ={Menü}/> 
         <Route exact path="/Hakkımızda" component ={Hakkımızda}/>
         <Route exact path="/İletişim" component ={İletişim}/>

      
      </Router>
      <Anasayfa />
      <Data />
      <Menü />
      <Hakkımızda />
      <İletişim />
      <Map />
      </>
       
      
       
  



    );
  }

export default App;

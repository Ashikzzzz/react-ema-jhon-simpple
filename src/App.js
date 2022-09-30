// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
// aos imported 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
    </div>
  );
}

export default App;

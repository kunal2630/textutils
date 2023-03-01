
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


//shortcut is imrs
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";






function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{

    if(mode ==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
      
      
    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      
      

    }

  }

  

  const showAlert = (message,type) =>{

    setAlert({

      msg:message,
      type:type
    })

    setTimeout(() => {
      
      setAlert(null);
    }, 1500);

  }

  
  return (

    <>

    

    {/* UPDATED V6 ROUTER CODE */}
    <BrowserRouter>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
      <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/> } />
          </Routes>
          </BrowserRouter>
         
   
        
    </>
    
  );
}

export default App;

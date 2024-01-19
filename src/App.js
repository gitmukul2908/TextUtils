//import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { useState } from 'react';
import { About } from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('dark')

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('DarkMode is Enabled', 'success')
      document.title = 'TextUtils - Dark'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('LightMode is Enabled', 'success')
      document.title = 'TextUtils - Light'
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/' element={<TextForm heading='Enter your Text' showAlert={showAlert} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login.jsx'
import Signin from './signin.jsx'
import Appbar from './Appbar.jsx'
import Course from './coursepage.jsx'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
   return <>
   <div>
    <Appbar/>
    <Router>
    <Routes>
      <Route path = "/signup" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/mainpage" element={<Course/>} />
    </Routes>
    </Router>
     </div>
   </>
    
}

export default App

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Notes from './components/Notes';
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />

    <Routes>
      <Route index={true} path='/login' element={<Login />}/>
      <Route index={true} path='/register' element={<Register/>}/>
      <Route exact path='/' element={<Notes/>}/>
      <Route exact path='/about' element={<Notes/>}/>
      <Route exact path='/pricing' element={<Notes/>}/>
    </Routes>
    </Router>
  );
}

export default App;

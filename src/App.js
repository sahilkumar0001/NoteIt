import './App.css';
import Login from './components/Login';
import Notes from './components/Notes';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route index path='/login' element={<Login />}/>
      <Route exact path='/' element={<Notes/>}/>
    </Routes>
    </Router>
  );
}

export default App;

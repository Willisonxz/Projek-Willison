import './App.css';
import "./styles/dekstop.css"
import Home from './pages/Home';
import Rent from './pages/Rent';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sold" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
  );
}

export default App;

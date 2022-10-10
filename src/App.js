import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
          <BrowserRouter>
              <Routes>
              <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;

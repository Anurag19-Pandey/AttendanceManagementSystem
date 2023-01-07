import './App.css';

import {BrowserRouter, Routes , Route} from "react-router-dom" ;
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard" ;
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/checkout" element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

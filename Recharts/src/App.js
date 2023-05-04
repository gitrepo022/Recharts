

import Login from './Components/Login';
import SignUp from './Components/Signup';
import Main from './Dasboard/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Dasboard/Home';
import Add from './Dasboard/Add';
import Getall from './Dasboard/Getall';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Add' element={<Add/>} />
        <Route path='/Getall' element={<Getall/>} />
        <Route path='/Main' element={<Main/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

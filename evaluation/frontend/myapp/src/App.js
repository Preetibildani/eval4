import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Note from './page/Post';
import { Login } from './page/Login';
import { Register } from './page/Register';
import { Home } from './page/Home';
import Post from './page/Post';

function App() {
  return (
    <div className="App">
     <Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/post' element={<Post/>} ></Route>
<Route path='/register' element={<Register/>} ></Route>
<Route path='/login' element={<Login/>} ></Route>

     </Routes>
    </div>
  );
}

export default App;

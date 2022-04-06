import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login  from './components/Login';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/tasks' element={<Tasks/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

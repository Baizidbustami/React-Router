
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Commponent/About/About';
import Friends from './Commponent/Friends/Friends';
import Header from './Commponent/Header/Header';
import Home from './Commponent/Home/Home';
import NotFund from './Commponent/NotFound/NotFund';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path='/about' element ={<About></About>}></Route>
        <Route path='*' element={<NotFund></NotFund>}></Route>
      </Routes>
    </div>
  );
}

export default App;

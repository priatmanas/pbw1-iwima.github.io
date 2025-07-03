import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadTitle from './component/headtitle';
import HeadNav from './component/headnav';
import Home from './component/home';
import About from './component/about';
import Footer from './component/footer';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <div class='grid-container'>
        <HeadTitle/>
        <HeadNav/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
        <Footer/>
      </div>   
    </BrowserRouter>
  )
}

export default App;
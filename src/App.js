import logo from './logo.svg';
import './App.css';
import {useContext} from "react";
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Project from './components/Projects/Project';

import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import {themeContext} from './components/toggle/Context'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import DetailProject from './components/DetailProject/DetailProject';

function App() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;
  return (
    <div id='/'
    style={{
      background:darkMode? "black":'',
      color :darkMode? "white":''
    }}
    
    >

<Header />

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='home' element={<Home />} />
  <Route path='blog' element={<Blog/>} />
  <Route path='about' element={<About />} />
  <Route path='detailproject' element={<DetailProject />} />
</Routes>

<Footer/>

    </div>
  );
}

export default App;

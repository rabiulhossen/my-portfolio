import logo from './logo.svg';
import './App.css';
import {useContext} from "react";
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Project from './components/Projects/Project';
import Testimonial from './components/Testimonial/Testimonial';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import {themeContext} from './components/toggle/Context'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {
  const theme = useContext(themeContext);
  console.log(theme);
  const darkMode = theme.state.darkMode;
  return (
    <div id='/'
    style={{
      background:darkMode? "black":'',
      color :darkMode? "white":''
    }}
    
    >

<Header />
<Intro />
<Services />
<Works />
<Project />
{/* <Testimonial /> */}
<Newsletter />
<Blog/>
<About />
<Footer/>

    </div>
  );
}

export default App;

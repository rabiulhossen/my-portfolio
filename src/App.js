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

function App() {
  const theme = useContext(themeContext);
  console.log(theme);
  const darkMode = theme.state.darkMode;
  return (
    <div
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
<Testimonial />
<Newsletter />
<Footer/>

    </div>
  );
}

export default App;

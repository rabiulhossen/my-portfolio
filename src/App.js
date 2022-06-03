import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Project from './components/Projects/Project';
import Testimonial from './components/Testimonial/Testimonial';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
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

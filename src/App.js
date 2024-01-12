import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
// pages
import Home from "./Pages/home"
import Services from './Pages/services';
import About from "./Pages/about"
 import Blogs from "./Pages/blogs"
 import Contact from './Pages/contact'
function App() {
  return (
  <>
  <Header/>
  <main>
    
   <Home/>
    <About/>
    <Blogs/>
    <Services/>
    <Contact/>
  </main>
  <Footer/>
  </>
  );
}

export default App;

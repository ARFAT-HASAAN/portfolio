import Navbar from "./Components/Navbar/Navbar";
import Abouteme from "./Components/AbouteME/Abouteme";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import MySwiper from "./Components/Swiper/MySwiper";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Abouteme></Abouteme>
      <Projects></Projects>
      <Blog></Blog>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      <MySwiper></MySwiper>
    </div>
  );
}

export default App;

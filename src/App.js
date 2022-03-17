import Cards from "./components/cards/Cards";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ShortInput from "./components/shortinput/ShortInput";

function App() {
  return (
    <div className="app fluid">
      <div className="svg-fluid">
          <Navbar />
          <Hero />
      </div>
      <ShortInput/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

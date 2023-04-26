import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader />
      <NavBar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;

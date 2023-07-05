import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Home from '../src/components/home/Home'
import Program from './components/program/Program';
import Pricing from './components/pricing/Pricing';
import Trainer from '../src/components/trainer/Trainer'
import Footer from './components/footer/Footer';

function App() {
  return (
    < >
     <Navbar/>
     <Home/>
     <About/>
     <Program/>
    <Trainer/>
     <Pricing/>
     <Footer/>
    </>
  );
}

export default App;
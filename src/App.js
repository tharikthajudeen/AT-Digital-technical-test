import './App.css';
import Footer from './Components/Footer';
import FAQs from './Components/FAQs';
import Frame from './Components/Frame';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <Frame/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default App;

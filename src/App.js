import logo from "./logo.svg";
// import './App.css';
// import styles from './index.css';
// import styles from './Components/Navbar/Navbar.module.css';
import { Navbar } from "./Components/Navbar/Navbar";
import Naruto from "./Components/Navbar/Naruto/Naruto";
import Find from "./Components/Find/Find";
import Driver from "./Components/Driver/Driver";
import Luxury from "./Components/Luxury/Luxury";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Naruto />
      <Find/>
      <Driver/>
      <Luxury/>
      <Footer/>
    </div>
  );
}

export default App;

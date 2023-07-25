import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="Lovey">
      <div className="ki">
      <Navbar></Navbar>
      <h1>Hello</h1>
      </div>
      <img src={logo} alt='io'></img>
    </div>
    
  );
}

export default App;

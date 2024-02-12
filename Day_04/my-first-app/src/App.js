import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';




function App() {
 
  return (
    <>
    <Navbar title="Meta" part1="Home" part2="Contact Us"/>
    <div className="container my-3">

    <Textform title="Enter the text" heading = "Enter the text to analise"/>
    </div>
    </>
  );
}

export default App;

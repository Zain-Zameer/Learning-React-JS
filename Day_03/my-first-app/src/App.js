import Navbar from './components/Navbar';
import './App.css';


let name = "Muhammad Zain";
let friendName = <i>Okasha Nadeem Jafri</i>;
function App(){
  return(
    <>
    {/* Component of navabr  */}

    {/* I cant send the number as prop it will throw error that in component it was decalred as string and then you entering numeric is not good  */}
    <Navbar title1 = "Meta"/>
    

    </>
  );
}

export default App;

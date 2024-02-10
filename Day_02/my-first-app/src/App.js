// import logo from './logo.svg';
import './App.css';
// let a = "Muhammad Zain";
// let b = "New World";
// function App() {
//   return (
//     // Thats how you can add JSX fragment to add elements above the div element if you dont program will throw an error that you cant return elements more than one 
//     <>
//     <h3>{b}</h3>
//     <div className="App">
//       <h1>Welcome, {a}</h1> 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

let name = "Muhammad Zain";
let friendName = <i>Okasha Nadeem Jafri</i>;
function App(){
  return(
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hey Admin, {name}</h1>
      <h2>Hey Friend, {friendName}</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus consequatur hic, eligendi ut cumque facere nesciunt id excepturi perferendis asperiores, qui nam sapiente!</p>
    </div>
    </>
  );
}

export default App;

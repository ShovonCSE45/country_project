
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
      
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect( () =>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Welcome to our Country Projects!!</h1>
//       <h3>Number of COunrty : {countries.length}</h3>
//       {
//         countries.map(country => <ShowCountry name={country.name.common} population ={country.population}></ShowCountry>)
//       }
   
     
//     </div>
//   )
// }

// function ShowCountry(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
    
//   )
// }

export default App;

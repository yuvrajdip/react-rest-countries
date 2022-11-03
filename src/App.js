// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';


// * Video 1 : Module Introduction, load countries using useEffect
// ! Video 2 : Display Countries in a simple way , Folder Structure

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  // ! Declaring State to save loaded data

  const [countries, setCountries] = useState([]);

  
  // ! Writting useEffect()
  useEffect( ()=>{
    // ! Writing fetch() inside useEffect() & setting loaded data
    fetch('https://restcountries.com/v3.1/all')
    .then( res=> res.json())
    .then( data => setCountries(data));
  }, [] );
  
  console.log(countries);
  
  return (
		<div>
			<h1>Visiting Every Country of the World !!!</h1>
			<h3>Available Countries : {countries.length}</h3>


      {
        countries.map(
          country =>{ 
            return <Country name={country.name.common} capital={country.capital} population={country.population}></Country> 
          }
        )
      }

		</div>
	);
}

function Country(props){
  console.log(props)
  return (
		<div className='frame'>
			<div className="country">
				<h2>Name : {props.name}</h2>
				<h2> | Capital : {props.capital}</h2>
			</div>
			<h2>Population : {props.population}</h2>
		</div>
	);
}

export default App;

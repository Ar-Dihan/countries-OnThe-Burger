import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}


/* function LoadCountries(){
  const [countries,setCountries]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))
  },[])
  return(
    <div>
      <h1>visiting all countries</h1>
      {countries.map(country=> <Country name={country.name.common} population={country.po}></Country>)}
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h3>Country: {props.name}</h3>
      <h4>Population: {props.population}</h4>
    </div>
  )
} */

export default App;

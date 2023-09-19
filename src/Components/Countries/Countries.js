import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect( () =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h2>hello from countries :: {countries.length}</h2>
            {
                countries.map(country => console.log(country))
            }
          <div className = "countries_container">
          {
                countries.map(country => <Country name={country.name.common}
                area ={country.area}
                region ={country.region }
                flags = {country.flags.png}
                key = {country.cca3}
                
                ></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Hello from Countries: {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country name={country.name} capital={country.capital} population={country.population}
                        flag={country.flag}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;
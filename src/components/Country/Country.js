import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area,region,population,name, flags} =props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country: {name.common}</h2>
            <h3>Population: {population} </h3>
            <p>Area: {area} </p>
            <p>Region: {region} </p>
        </div>
    );
};

export default Country;
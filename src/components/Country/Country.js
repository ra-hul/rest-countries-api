import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (
        <div className="country">
            <h4>This is: {props.name} </h4>
            <img style={{ width: '200px' }} src={props.flag} alt='' />
            <p> Capital is: {props.capital} Population is: {props.population}</p>
        </div>
    );
};

export default Country;
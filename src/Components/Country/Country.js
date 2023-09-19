import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="countryStyle">
            <h2>Name: {props.name}</h2>
            <img src={props.flags} alt="" />
            <h4>Area: {props.area}</h4>
            <h4>Region : {props.region}</h4>
            
            
        </div>
    );
};

export default Country;
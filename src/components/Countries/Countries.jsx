

import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
const [visitedCountries,setVisitedCountries] =useState([])
const [visiedFlags,setVisitedFlags]=useState([]);

    const countries =use(countriesPromise);
   // console.log(countries);

   const handleVisitedFlags =(flag)=>{
   const newVisitedFlags =[...visiedFlags,flag];
   setVisitedFlags(newVisitedFlags);


   }



const handlevisitedCountries =(country)=>{

console.log("country visited clicked to be added ",country);
const newVisitedCountries =[...visitedCountries,country];
setVisitedCountries(newVisitedCountries);
}


    return (
        <div>
            <h1>Travelling countries:{countries.length}</h1>
            <h3>Travel so :{visitedCountries.length}</h3>

    <div className='visited-flags-container'>
        {
         visiedFlags.map((flag ,index)=>
            <img key={index} src={flag}></img>
         )
        }
        </div>        
            

<ol>
{
    visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
}

     
</ol>




<div className='countries'>
    {
    countries.map(country =><Country key={country.cca3}
    handlevisitedCountries={handlevisitedCountries}
    handleVisitedFlags={handleVisitedFlags}
    country={country}></Country>)
}

</div>



        </div>


    );
};

export default Countries;
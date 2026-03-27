
import React, { useState } from 'react';
import './Country.css'


const Country = ({country,handlevisitedCountries,handleVisitedFlags}) => {
console.log(handlevisitedCountries);
const [visited,setVisited] =useState(false)


    const handleVisited = ()=>{
if(visited===true){
    setVisited(false)
}

else{
    setVisited(true);
}

handlevisitedCountries(country);

    }




    return (
        <div className={`Country  ${visited && 'Country-visited' }`}>
            <h3>Name : {country.name.common} </h3>
            <img src={country.flags.png}/>
            <p>Independent :{country.
independent?'free':'not free'
}</p>

<p>Population :{country.
population
}</p>

<button 
className={visited?'btn-visited':'btn-not-visited'}
 onClick={handleVisited}>
    {visited?'visited':'Not visited'}</button>

<button onClick={() =>handleVisitedFlags(country.flags.png)}
    
    
    >

Add visited Flags

</button>




        </div>
    );
};

export default Country;
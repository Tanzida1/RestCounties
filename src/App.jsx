


import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,independent,cca2,cca3')
  .then(res =>res.json());
 
  return (
    <>
    
   <Suspense fallback={<h3>nadir is comming ...</h3>}>
     <Countries countriesPromise={countriesPromise}></Countries>
   </Suspense>
    </>
  )
}

export default App

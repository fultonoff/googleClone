'use client'


import React, {useState, useEffect} from 'react'

function CountryLookup() {
    const [country, setCountry] = useState('')

    useEffect(()=>{
        fetch(`http://ip-api.com/json/`).then((res)=> res.json()).then((res) => setCountry(res.country))
        
    }, [])
  return (
    <div>{country}</div>
  )
}

export default CountryLookup
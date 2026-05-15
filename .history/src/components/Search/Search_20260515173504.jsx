import axios from 'axios';
import React from 'react'

function Search({ query, setQuery }) {
  const KEY = "8de95bd9553e4e2b259970b49fd99741";

  const getWeather = () => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`)
    .then((data) => {
        se
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default Search

import React from 'react'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
  return (
    <section>
      <Search query={query} setQuery={setuery}/>
    </section>
  )
}

export default Main

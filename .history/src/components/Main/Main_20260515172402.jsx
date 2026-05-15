import React from 'react'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
  return (
    <section>
      <Search query={query} setQuery={setquery}/>
    </section>
  )
}

export default Main

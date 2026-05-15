import React, { useState } from 'react'
import './Search.scss'

function Search({ onSearch }) {
    const [value, setValue] = useState("");

  return (
    <section className='wrapper'>
      <input 
        className='search-box' 
        value={value}
        onChange={}
        onKeyDown={(e) => {
            if (e.key === 'Enter') onSearch(e.target.value)
        } } 
        type="text"
        placeholder='Поиск города'
      />
      {/* <button onClick={getWeather}>search</button> */}
    </section>
  )
}

export default Search

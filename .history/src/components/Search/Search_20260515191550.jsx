import React from 'react'
import './Search.scss'

function Search({ onSearch }) {
    

  return (
    <section className='wrapper'>
      <input 
        className='search-box' 
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

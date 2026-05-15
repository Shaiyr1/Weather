import './Search.scss'

function Search({ onSearch,  query, setQuery, }) {

  return (
    <section className='wrapper'>
      <input 
        className='search-box' 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {e.pre} onSearch(e.target.value)
        } } 
        type="text"
        placeholder='Поиск города'
      />
      {/* <button onClick={getWeather}>search</button> */}
    </section>
  )
}

export default Search

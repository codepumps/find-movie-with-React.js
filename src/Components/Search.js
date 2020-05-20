import React from 'react'

function Search({ handleInput, search }) {
    return (
        <section className="searchbox-container">
            <input style={{ color: "#fff" }} type="text" placeholder="Search for movie..." className="searchbox" onKeyPress={search} onChange={handleInput} />
            {/* <button onClick={search} className="searchBtn" type="text">Search</button> */}
        </section>
    )
}

export default Search

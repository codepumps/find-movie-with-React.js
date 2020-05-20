import React, { useState } from 'react';
import axios from 'axios'

import Results from './Components/Results'
import Search from './Components/Search'



function App() {

  const [state, setState] = useState({
    movie: "",
    results: []
  });


  const search = (e) => {
    if (e.key === "Enter" && !!state.movie) {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=40cddeae1fb4f54de4542c8b204de3ec&language=en-US&query=${state.movie}&page=1&include_adult=false`).then(({ data }) => {
        let results = data.results;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
      console.log(state.results)
    }
  }

  const handleInput = (e) => {
    let movie = e.target.value;

    setState(prevState => {
      return { ...prevState, movie: movie }
    });
  }

  return (
    <div className="App">
      <header>
        <h2>Search by movie name</h2>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;

import React from 'react'

function Result({ result }) {
    const imgUrl = `https://image.tmdb.org/t/p/w300${result.poster_path}`;
    return (
        <div className="result">
            <img src={imgUrl} />
            <div className="result-info">
                <div className="imdb">
                    IMDB : {result.vote_average} ~ IMDB Votes : {result.vote_count}
                </div>
                <h2>{result.title}</h2>
                <div className="content">
                    {result.overview}
                </div>
                <ul className="popularity">
                    <li><span>Popularity</span> : {result.popularity}</li>
                    <li><span>Language</span> : {result.original_language}</li>
                    <li className="diff-child"><span>Released Date</span> : {result.release_date}</li>
                </ul>
            </div>

        </div>
    )
}

export default Result

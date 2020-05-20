import React from 'react'
import Result from './Result'


function Results({ results }) {
    return (
        <div className="results">
            {!!results ?
                results.map(result => (
                    <Result key={result.id} result={result} />
                )) : null
            }
        </div>
    )
}

export default Results

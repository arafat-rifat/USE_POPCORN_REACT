import React from 'react'
import WatchedMovieList from './WatchedMovieList'

const WatchedList = ({watched}) => {
  return (
    <ul className="list">
                {watched.map((movie) => (
                  <WatchedMovieList movie={movie} key={movie.imdbID} />
                ))}
              </ul>
  )
}

export default WatchedList
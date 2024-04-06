import React from 'react'
import WatchedSummery from './WatchedSummery'
import WatchedList from './WatchedList'

const WatchedBox = ({setWatched , watched , isOpen2 , setIsOpen2 , avgImdbRating , avgUserRating , avgRuntime}) => {
  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
            <WatchedSummery watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} 
            avgRuntime={avgRuntime}
            />

             <WatchedList watched={watched}/>
            </>
          )}
        </div>
  )
}

export default WatchedBox
import React, { useState } from 'react'
import Star from './Star';


const containerStyle = {
    display : "flex",
    alignItems : "center",
    gap: "16px",
};

const starContainerStyle = {
    display : "flex",
};

const textStyle = {
    lineHeight : "1",
    margin : "0",
}


const StarRating = ({maxRating = 5}) => {
  
    const [ rating , setRating] = useState(0);

  return (
    <div style={containerStyle}>
      
      <div style={containerStyle}>
       {Array.from({ length: maxRating}, (_, i) =>
          
          <Star key={i} onRate/>
       )}
      </div>
     
     <p style={textStyle}> {rating || ""} </p>

    </div>
  )
}

export default StarRating
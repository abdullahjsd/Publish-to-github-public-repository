import React from 'react'
import { getContrastYIQ  } from"../helpers"

 function Brand({brand}) {
    
  return (
    <>
      <div className='brand'>
        <h5 onClick={toggleSelcted}>{brand.title}</h5> 
        <div className="brandColors">
          {brand.colors.map(color =>(
            <span style={{'--bgColor': `#${color}`,"--textColor": `${getContrastYIQ(color)}`}}>{color}</span>
          ))}
          
        </div>
      </div>  
      
    </>
  )
}
export default Brand;
import React from 'react'
import {GrSearch} from'react-icons/gr'

 function Search() {
  return (
    <div className='search'>
        <div className="icon">
            <GrSearch/>
        </div>
      <input type="text" placeholder='Arama yap....' />
    </div>
  )
}
export default Search;
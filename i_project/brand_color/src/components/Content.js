import React, { useState } from 'react'
import Search from './Search';
import BrandsData from "../brandc.json"
import Brand from './Brand';

function Content() {
   const brandsArray= []

    Object.keys(BrandsData).map(key=>{
      brandsArray.push(BrandsData[key])
    })
    const [brands,setBrands] = useState(brandsArray)
  return (
    <main className='content'>
        <header className="header">
        <Search/>
        </header>
        <section className="brands">
          {brands.map(brand =>(
            <Brand brand={brand}/>
          ))}
        </section>
    </main>
  )
}
export default Content;
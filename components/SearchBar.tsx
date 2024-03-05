'use client'

import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import {useState} from 'react'

const SearchBar = () => {
   const [manufacture,setManufacture]= useState('');
    const handleSearch =()=>{};
  return (
    <div>
        <form className='searchbar' onSubmit={handleSearch}>
            <div> <SearchManufacturer manufacturer={manufacture} setManuFacturer={setManufacture}/></div>
             </form>
    </div>
  )
}

export default SearchBar

import React from 'react'


const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
        <div className='flex justify-center'>
           <img src="/assets/search.svg" alt='search' className='max-w-6 mr-2'/> 

           <input
                type='text'
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
           />
        </div>
    </div>
  )
}

export default Search
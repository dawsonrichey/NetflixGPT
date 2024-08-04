import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[35%]'>
        <form className="w-1/2 grid grid-cols-12 bg-black opacity-90">
            <input 
            type='text'
            className="w-full md:w-1/2 p-4 text-lg rounded-lg"
            placeholder='What would you like to watch today?' />
            <button className="p-4 ml-4 bg-red-700 text-white rounded-lg">Search</button>
            </form>
    </div>
  )
}

export default GptSearchBar;
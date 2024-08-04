import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    // Make an API call to GPT API 

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

        console.log(gptResults.choices);
  };
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className="w-1/2 grid grid-cols-12 bg-black opacity-90" onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            type='text'
            className="p-4 m-4  col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button 
            className="col-span-3 py-2 m-4px-4  bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}>
              {lang[langKey].search}
              </button>
            </form>
    </div>
  )
}

export default GptSearchBar;
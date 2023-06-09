
'use client'

import React, {useState} from 'react'
import {AiOutlineSearch, AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'


function HomeSearch() {
  const [input, setInput] = useState('')
  const [randomSearchLoadin, setRandomSearchLoadin] = useState(false)
  const router = useRouter()

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)


  }

  const randomSearch = async()=>{
    setRandomSearchLoadin(true)
    const res = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await res.json()

    if(!res) return
    
    router.push(`/search/web?searchTerm=${data}`)
    setRandomSearchLoadin(false)


  }
  return (
    <>
        
        <form className='flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl' onSubmit={handleSubmit}>
            <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
            <input type="text" className='flex-grow focus:outline-none' onChange={(e)=> setInput(e.target.value)} value={input}/>
            <BsFillMicFill className='text-lg'/>
        </form>

        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8 '>
          <button className='btn' onClick={handleSubmit}>Google Search</button>
          <button className='btn flex justify-center items-center disabled:opacity-80' disabled={randomSearchLoadin} onClick={randomSearch}> {randomSearchLoadin ? (<AiOutlineLoading3Quarters className=' animate-spin text-2xl'/>) :'I am Feeling Lucky '}</button>
        </div>
    </>
  )
}

export default HomeSearch
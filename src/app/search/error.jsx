'use client'

import React, {useEffect} from 'react'

function ErrorPage({error, reset}) {

    useEffect(()=>{
        console.log('Error: ', error);
    }, [error])


  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <h1 className='text-3xl mb-4'>Something went wrong</h1>
        <button onClick={()=> reset()} className='text-blue-500'>Try again</button>
    </div>
  )
}

export default ErrorPage
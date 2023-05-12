import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'

function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex items-center space-x-4'>
            <Link href={'https://www.google.com'} className='hover:underline'>Gmail</Link>
            <Link href={'https://image.google.com'} className='hover:underline'>Images</Link>
            <TbGridDots className='bg-transparent hover:bg-gray-200 duration-200 rounded-full text-4xl cursor-pointer p-2'/>
            <button className='bg-blue-500 text-white px-6 py-2 ffont-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign in</button>
        </div>
    </header>
  )
}

export default HomeHeader
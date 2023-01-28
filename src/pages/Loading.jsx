import React from 'react'
import Image1 from '../assets/306753727_394224766235099_745785161176947641_n.jpg'
import './Loading.css'

const Loading = () => {
  return (
    <div className='bg-black h-screen flex w-full items-center justify-center scale-50'>
        <div className='w-60 h-60 bg-black relative '>
            <div className='w-16 bg-white h-32 absolute right-10 top-10 overscroll-none	 '>
            <div className='first-rect bg-white '></div>
            <div className='second-rect bg-white '></div>
            <div className='third-rect bg-white '></div>

            </div>
        </div>
    </div>
  )
}

export default Loading
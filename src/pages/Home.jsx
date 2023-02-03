import React, { useEffect, useRef, useState } from 'react'
import Image1 from '../assets/240090290_133479762313709_1457220668633462537_n.jpg'
import Image2 from '../assets/314594792_431199059204336_1427359580509484582_n.jpg'
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'
import { IconContext } from "react-icons";
import SmoothScroll from 'smooth-scroll';
import Loading from './Loading';
import Navbar from '../component/Navbar';

const Home = () => {
 
    const targetRef = useRef()
    const [loading,setLoading] = useState(true)
    
   

    const slider = [Image1,Image2]
    const [sliderState,setSliderState] = useState(0)
    const handleNext = (e) => {
        if(sliderState === slider.length - 1) {
            setSliderState(0)
            return
        }
        setSliderState(sliderState + 1)
    }

    const handlePrevious = (e) => {
        if(sliderState=== 0) {
            setSliderState(slider.length - 1)
            return
        }
        setSliderState(sliderState - 1)
    }
    console.log(sliderState)
    useEffect(()=>{
        const loaderVisible = setTimeout(()=>{
            setLoading(false)
        },1000)

        return () =>{
            clearTimeout(loaderVisible)
        }
    },[])
    console.log(loading)

    if(loading){
        return <Loading/>
    }

  return (
    <>
    <div className='w-screen bg-white h-screen overflow-hidden  ' ref={targetRef} style={{ scrollBehavior: 'smooth', duration: '100ms' }}>
        <img src={slider[sliderState]} className='w-screen h-screen object-cover   ' alt="" />
    </div>
    <div className='absolute flex justify-between inset-0 my-auto mx-4 items-center   [&_button]:border-comp-theme [&_button]:border [&_button]:p-4 [&_button]:rounded-full'>
            <IconContext.Provider value={{ color: "#fbc56f", className: "global-class-name", size:20 }}>
                <button className='hover:bg-main-theme transition duration-300 ease-out' value={-1} onClick={(e)=>handlePrevious(e)}><FiArrowLeft/></button>
                <button className='hover:bg-main-theme transition duration-300 ease-out' value={1} onClick={(e)=>handleNext(e)}><FiArrowRight/></button>
            </IconContext.Provider>
    </div>
    <div className='transition duration-300 ease-out px-20 h-screen'>
         
    </div>
    </>
  )
}

export default Home
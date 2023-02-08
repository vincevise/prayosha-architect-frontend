import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/306753727_394224766235099_745785161176947641_n.png'
import {  Squash } from 'hamburger-react'

const Navbar = () => {
    const location = useLocation()
    const[background,setBackground] = useState(false)
    const [isDropDown,setIsdropdown] = useState(false)
    function scroll(){
        // console.log(window.scrollY)
        if(window.scrollY > 0){
            setBackground(true)
        }else{
            setBackground(false)
        }
    }

     useEffect(()=>{
        window.addEventListener('scroll',scroll)
        return ()=>{
            window.removeEventListener('scroll',scroll)
        }

        
     },[])

     const headerStyle = background ? `fixed z-50 inset-x-0 mx-auto px-4 bg-[#2c6150] ease-in-out ` : `fixed z-50 inset-x-0 mx-auto px-4 ease-in-out ` 

     if(location.pathname === '/loading') return
  return (
    <>
    <div   className={`${headerStyle} transition duration-300 ease-out  border-b-[1px]  border-comp-theme `}>
        <div className='w-full flex justify-between items-center '>
            <div className='flex items-center  '>
                <Link to={'/'}>
                    <img src={Logo} className='h-20 p-4' alt="" />
                </Link>
                <p className='text-white pr-1  text-2xl'>
                    Prayosha 
                </p>
                <strong className='text-comp-theme  text-2xl'>Architects</strong>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-5 text-comp-theme mr-2 [&_li]:hover:cursor-pointer   font-lato text-lg'>
                    <Link to={'/work'} ><li className='underlineanimate'>Projects</li></Link>
                    <Link to={'/contact'} ><li className='underlineanimate'>Contact</li></Link>
                    <Link to={'/aboutUs'} ><li className='underlineanimate'>AboutUs</li></Link>
                </ul>
                
            </div>
            <div className='text-comp-theme lg:hidden' onClick={()=>setIsdropdown(!isDropDown)}>
                <Squash toggled={isDropDown} toggle={setIsdropdown}/>
            </div>
        </div>
    </div>
    { 
    <div className={`fixed pt-20  w-full z-[40] ${isDropDown ? 'h-full bg-black [&_ul]:flex' : 'h-0 [&_ul]:hidden' } dropdownanimate`}>
        <ul className={` w-full h-full flex flex-col gap-5 text-comp-theme [&_li]:hover:cursor-pointer font-lato text-lg items-center justify-evenly`}>
            <Link to={'/work'} onClick={()=>setIsdropdown(!isDropDown)} ><li className='underlineanimate slideanimate'>Projects</li></Link>
            <Link to={'/contact'}  onClick={()=>setIsdropdown(!isDropDown)}><li className='underlineanimate'>Contact</li></Link>
            <Link to={'/aboutUs'}  onClick={()=>setIsdropdown(!isDropDown)}><li className='underlineanimate'>AboutUs</li></Link>
        </ul>
    </div>
    }
    
    </>
  )
}

export default Navbar
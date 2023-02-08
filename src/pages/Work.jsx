import React, { useEffect } from 'react'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/320733038_535060205340153_6249155997503283317_n.jpg'
import Image3 from '../assets/240859546_135907945404224_8328724117343812648_n.jpg'
import Image4 from '../assets/219314555_122633400065012_2812046412173813453_n.jpg'
import Image5 from '../assets/216248764_119404297054589_2918197475821200014_n.jpg'
import Image6 from '../assets/202474566_109897878005231_5228843553493058904_n.jpg'
import Image7 from '../assets/312563183_420815886909320_3871550143110795557_n.jpg'
import Image8 from '../assets/221667198_123339016661117_820448698427415344_n.jpg'
import { Link,useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import CategoriesBar from '../component/CategoriesBar'
import { getProjects } from '../api/api'
import Loading from './Loading'


export const selectedStyle = 'bg-main-theme rounded-full text-comp-theme border border-comp-theme'

export const unselectedStyle = 'hover:bg-main-theme hover:border-main-theme'

const Work = () => { 
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[])
  
    const {id} = useParams()
    
   const {data, isFetching, isFetched} = useQuery('projects',getProjects)

   if(isFetching){
    return <div><Loading/></div>
   }

  return (
    <div className='w-full min-h-screen py-28 px-20'>
    <CategoriesBar/>
    <div className=' flex flex-wrap gap-10 items-center justify-center '>
       
        {data?.map((x,i)=>{
            return (
                <Link to={`/project/${x.id}`} key={x.id} >
                <div className=' w-56 h-56  transition-all duration-300 ease-in-out project-card cursor-pointer hover:[&_img]:opacity-0 bg-black relative hover:scale-110 '>
                    <div className='absolute text-comp-theme w-full h-full flex flex-col items-center justify-center'>
                        <p className='text-xl mb-2 '>
                            {x.name}
                        </p>
                        <p className='text-white text-sm '>
                            {x.location} | 2018
                        </p>
                    </div>
                    <img src={x.thumbnail.url} alt="" className='absolute object-cover w-full h-full z-10 transition-all duration-300 ease-in-out'/>
                </div>
                </Link>
            )
        })}
    </div>
    </div>
  )
}

export default Work
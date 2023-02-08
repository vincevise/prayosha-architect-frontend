import React, { useEffect, useState } from 'react'
import Image8 from '../assets/240090290_133479762313709_1457220668633462537_n.jpg'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { getOneProject } from '../api/api'
import Loading from './Loading'
import {AiFillRightCircle} from 'react-icons/ai'
 
const Project = () => {
    const [isOverlay,setOverlay] = useState(false)
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const {id} = useParams()
    
    const {data,isFetched, isFetching} = useQuery(id,()=>getOneProject(id))
    // console.log(data)

    if(isFetching){
        return <div className='min-h-screen pt-28 px-20 text-white '> <Loading/></div>
    }

    window.addEventListener('click',(e)=>console.log(e.target))
  return (
    <>
    {
    
    <div className={`${isOverlay ? 'w-full h-screen' : 'w-0 h-0'} block  bg-white/90 fixed overlaytransition z-50 flex items-center justify-center`} onClick={()=>setOverlay(!isOverlay)}>
                 
    </div>
    }

    {isOverlay && 
            <>
                <div className={`${isOverlay ? 'block' : 'hidden'} galleryanimate z-50 fixed w-full h-full flex px-44 py-20 items-center justify-center`} onClick={()=>setOverlay(!isOverlay)}>
                    
                    <img src={data?.gallery[0].url} alt="" className='w-full h-full object-cover ' />
                    
                </div>
                 
            </>
    }
    {
        isOverlay && 
        <>
            <span className='fixed  inset-y-1/2  flex flex-col items-center justify-center left-10 z-50  cursor-pointer'>Right</span>
            <span className='fixed inset-y-1/2 flex flex-col items-center justify-center right-10 z-50  cursor-pointer'><AiFillRightCircle color={'black'}/></span>
        </>
    }
  
     
    <div className='min-h-screen pt-28 px-20 text-white '>
        <div className='flex  flex-col-reverse lg:flex-row gap-6'>
            <div className='border border-comp-theme py-2 px-4  w-full lg:w-1/4 [&_span]:pb-2 h-fit'>
                <span> 
                    <strong className='text-lg block text-comp-theme'>
                        {data.name}
                    </strong> 
                    
                </span>
                <span> 
                    <strong>
                        Location 
                    </strong> 
                    <span className='block'>
                        {data.location}
                    </span>
                </span>
                <span>
                    <strong>
                    Area 
                    </strong>
                    <span className='block'>
                        {data.area} sq.ft
                    </span>
                </span>
                <span>
                    <strong>
                        Status
                    </strong>
                    <span className='block'>
                        Ongoing
                    </span>
                </span>
                <span>
                    <strong>
                        Date of Completion
                    </strong>
                    <span className='block'>
                        {data.date}
                    </span>
                </span>
                <span>
                    <strong>
                        Type
                    </strong>
                    <span className='block'>
                        {data.type}
                    </span>
                </span>
            </div>
            <div className='lg:w-3/4 w-full'>
                <img src={data.poster.url} alt="" className='w-max-full'/>
            </div>
        </div>
       <div className='border-t border-comp-theme my-6 py-6 flex flex-wrap gap-4 justify-center'>
            {data && data?.gallery?.map((x)=>(
                <div className='w-60 h-40 cursor-pointer overflow-hidden' key={x.fileId} onClick={()=>setOverlay(!isOverlay)}>
                    <img src={x.url} alt="" className='w-full h-full'/>
                </div>
            ))}
       </div>
    </div>
    </>
  )
}

export default Project
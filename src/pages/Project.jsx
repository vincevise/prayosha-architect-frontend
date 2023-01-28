import React, { useEffect } from 'react'
import Image8 from '../assets/240090290_133479762313709_1457220668633462537_n.jpg'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { getOneProject } from '../api/api'
 
const Project = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const arr = [1,2,3,4]

    const {id} = useParams()
    
    const {data,isFetched, isFetching} = useQuery(id,()=>getOneProject(id))
    console.log(data)

    if(isFetching){
        return <div className='min-h-screen pt-28 px-20 text-white '> Loading...</div>
    }
  return (
    <div className='min-h-screen pt-28 px-20 text-white '>
        <div className='flex gap-6'>
            <div className='border border-white py-2 px-4  w-1/4 [&_span]:pb-2 h-fit'>
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
            <div className='w-3/4'>
                <img src={data.poster.url} alt="" className='w-max-full'/>
            </div>
        </div>
       <div className='border-t border-white my-6 py-6 flex flex-wrap gap-4 justify-center'>
            {data?.gallery?.map((x)=>(
                <div className='border border-white w-60 h-40 cursor-pointer overflow-hidden' key={x}>
                    <img src={x.url} alt="" className='w-full h-full'/>
                </div>
            ))}
       </div>
    </div>
  )
}

export default Project
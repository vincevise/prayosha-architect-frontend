import React from 'react'
import { Link,useParams } from 'react-router-dom'
import CategoriesBar from '../component/CategoriesBar'
import {useQuery} from 'react-query'
import { getCategoryProjects } from '../api/api'
import Loading from './Loading'

const CategoryProject = () => {
    const {id} = useParams()

    const {data, isFetched, isFetching, isLoading} = useQuery(id,()=>getCategoryProjects(id))

    let content;
    console.log(data)

    if(isFetching){
        content = (<Loading/>)
    }

    if(isFetched){
        content = (data.map((x,i)=>{
            return (
                <Link to={`/project/${x.id}`} key={i}>
                <div className=' w-56 h-56  transition-all duration-300 ease-in-out project-card cursor-pointer hover:[&_img]:opacity-0 bg-black relative hover:scale-110 '>
                    <div className='absolute text-comp-theme w-full h-full flex flex-col items-center justify-center'>
                        <p className='text-xl mb-2'>
                            {x.name}
                        </p>
                        <p className='text-white text-sm'>
                            {x.location} | 2018
                        </p>
                    </div>
                    <img src={x.thumbnail.url} alt="" className='absolute object-cover w-full h-full z-10 transition-all duration-300 ease-in-out'/>
                </div>
                </Link>
            )
        }))
    }

  return (
    <div className='min-h-screen py-28 px-20'>
        <CategoriesBar/>
        <div className=' flex flex-wrap gap-10 items-center justify-center '>
            {content}
        </div>
    </div>
  )
}

export default CategoryProject
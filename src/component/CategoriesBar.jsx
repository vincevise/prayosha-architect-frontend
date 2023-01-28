import React from 'react'
import { Link,useParams } from 'react-router-dom'


const CategoriesBar = () => {

    const selectedStyle = 'bg-main-theme rounded-full text-comp-theme border border-comp-theme'

    const unselectedStyle = 'hover:bg-main-theme hover:border-main-theme'

    const {id} = useParams()
    console.log(id)

  return (
    <div>
        <div className='w-full flex flex-wrap text-white flex  gap-4 w-full items-center justify-center pb-10 [&_span]:cursor-pointer [&_span]:font-semibold [&_span]:px-6 [&_span]:py-2  [&_span]:rounded-full [&_span]:text-lg  [&_span]:duration-500'>
        <Link to={'/work'}>
            <span className={`${!id  ? selectedStyle : unselectedStyle}`}>All</span>
        </Link>
        <Link to={'/work/residence'}>
            <span className={`${id== 'residence' ? selectedStyle : unselectedStyle}`}>Residences</span>
        </Link>
        <Link to={'/work/housing'}>
            <span className={`${id== 'housing' ? selectedStyle : unselectedStyle}`}>Housing</span>
        </Link> 
        <Link to={'/work/commercial'}>
            <span className={`${id== 'commercial' ? selectedStyle : unselectedStyle}`}>Commercial</span>
        </Link>  
        </div>
    </div>
  )
}

export default CategoriesBar
import { lazy, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar'
// import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Contact from './pages/Contact'
// import AboutUs from './pages/AboutUs'

import Footer from './component/Footer'
// import Project from './pages/Project'
import Loading from './pages/Loading'
import { Suspense } from 'react'
import CategoryProject from './pages/CategoryProject'

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
    window.scrollTo(0, 0);
  },[])
 

   
  const Home = lazy(()=>import('./pages/Home'))
  const Work = lazy(()=>import('./pages/Work'))
  const Project = lazy(()=>import('./pages/Project'))
  const Contact = lazy(()=>import('./pages/Contact'))
  const AboutUs = lazy(()=>import('./pages/AboutUs'))
  return (
    <div className="bg-black">
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<><Home /><Footer/></>}/>
          
          <Route path='/contact' element={<><Navbar/><Contact /><Footer/></>}/>
          
          <Route path='/aboutUs' element={<><Navbar/><AboutUs /><Footer/></>}/>
          
          <Route path='/work' element={<><Navbar/><Work /><Footer/></>}> 
          </Route>
          
          <Route path='/work/:id' element={<><Navbar/><CategoryProject/><Footer/></>}/>

          <Route path='/project/:id' element={<><Navbar/><Project /><Footer/></>}/>
          
          <Route path='/loading' element={<><Loading /></>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
      
    </div>
  )
}

export default App

import React from 'react'
import Logo from '../assets/306753727_394224766235099_745785161176947641_n.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
    
  return (
    <div className='bg-black/80 text-white px-20 py-10 flex items-center justify-between border-t border-comp-theme'>
        <div>
            <img src={Logo} alt="" className='h-40'/>
        </div>
        <div className='flex gap-24 mr-4'>
             <div>
                <div className='text-xl flex flex-wrap mb-2'> contact  </div> 
                
                <p className='text-sm flex items-center'><strong className='pr-2'>P</strong>  9601650000</p>
                <p className='text-sm flex items-center'><strong className='pr-2'>E</strong>  prayoshaArchitects@gmail.com</p>
             </div>
             <div>
                <div className='text-xl flex mb-2'> address  </div> 
                
                <p className='text-sm flex flex-wrap items-center w-60'> 603,White orchid, LP Savani Rd, Guru Ram Pavan Bhumi, Adajan Gam, Adajan, Surat, Gujarat 395009</p>
             </div>
             <div>
                <div className='text-xl flex mb-2'> social  </div> 
                
                <div className='text-sm  justify-center items-center cursor-pointer'  > 
                    <p>
                        Instagram
                    </p>
                    <p>
                        Facebook    
                    </p>  
                </div>
             </div>
        </div>
    </div>
  )
}

export default Footer
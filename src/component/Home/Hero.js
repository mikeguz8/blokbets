import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import { AuthContext } from '../../auth/AuthProvider'
import { FcButtingIn,FcBusinesswoman,FcOnlineSupport,FcNightPortrait } from "react-icons/fc";


const Hero = () => {

  
    
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
        .then()
        .catch();
}

 
  return (
    <div className='px-8 sm:px-12  py-10'>
      
          
          <div className="py-10 sm:px-12 lg:w-[60%]">
              
              <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House, Unleash Profit Protential
              </p>
              <h1 className='text-[35px] sm:leading-[60px] mb-10	 sm:text-[60px] font-semibold '>Decentralized <br />  Sports Betting
        </h1>
        


        {
          user?.uid ?
            
            <>
                          <button onClick={handleLogOut} className='my-2  inline  lg:my-0 text-white uppercase   font-normal hover:bg-[#47a09a] outline-none py-3 px-12 text-[10px] border-[1px] border-[#59DCD3]'>Log Out</button>


            </>
          :
          
          <>
               <Link to={'/getstart'}><button className='text-white mb-2 uppercase  rounded-none font-normal hover:bg-[#47a09a]  outline-none py-3 px-12 mr-6 border-[1px] text-[10px] border-[#59DCD3]'>getting started</button></Link>
             <Link to={'/login'}><button className='text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-3 px-10 text-[10px] border-[1px] border-[#59DCD3]'>Login</button></Link>


         
                      
</>

}

            
      
        
          </div>

    </div>
  )
}



export default Hero



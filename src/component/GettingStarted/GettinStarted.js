import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthProvider'
import useTitle from '../../Router/useTitle'

import homemain from './../../assest/img-home/homemain.png'

const GettinStarted = () => {


  useTitle('Getting started')
  const navigate=useNavigate()
  const {user} = useContext(AuthContext);
  if (user?.uid) {
    navigate("/");
}
  
  return (
    <div>

      

      <div className="px-8 sm:px-12  py-14">
        

        <div className="sm:px-12">

          <div className="">
          <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House, Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Get Started Page
            </h1>
            
            <p className='text-[16px] my-4 font-normal  text-white'><span>1.</span> Sign Up or Login</p>
            
            <p className='text-[16px] my-4  font-normal  text-white'><span>2.</span>  Connect Crypto Wallet</p>
            <p className='text-[16px] my-4  font-normal  text-white'><span>3.</span> Select an Offered Bet</p>
            <p className='text-[16px] my-4  font-normal  text-white'><span>4.</span>  Earn, Win, Play  </p>

                
            <p className='text-[#66FCF1] my-6 tracking-wide text-[14px]'>
            Sign Up or Login Below
              </p>
        <Link to={'/register'}><button className='text-white mb-2 uppercase  rounded-none font-normal hover:bg-[#47a09a]  outline-none py-3 px-12 mr-6 border-[1px] text-[10px] border-[#59DCD3]'>SignUp</button></Link>
             <Link to={'/login'}><button className=' text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-3 px-12 text-[10px] border-[1px] border-[#59DCD3]'>Login</button></Link>
         </div>
        </div>




</div>


    </div>
  )
}

export default GettinStarted
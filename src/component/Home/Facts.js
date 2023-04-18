import React from 'react'
import rectangle from './../../assest/img-home/Rectangle 1.png'


const Facts = () => {
  return (
    <>
    <div className="bg-[#121212] px-8 sm:px-12  py-14">
      <div className="sm:px-12 ">
             <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> <span className='px-4  sm:text-[48px] text-[30px] sm:leading-[50px] font-semibold'>Facts.</span></h1>
             <p className='text-[#59DCD3] my-4 tracking-wide text-[14px]'>
             Astonishing Comparison to the sportsbetting industry
              </p>
      </div>
        
        
      </div>

      <div className="px-8 sm:px-12  py-14">

        <div className="sm:px-12 md:flex  justify-between sm:w-[70%] mx-auto items-center">
          <div className="">
            <h1 className='text-[28px] leading-[38px] font-normal text-[#66FCF1]'>Traditional Sportsbook</h1>
            
            <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>5-30% Implicit Profit</span>  </div>
              <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>For Profit, “Juice”, Fees Charged</span>  </div>
              <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>Earning Potential Set by House</span>  </div>
             

          </div>
          <div className="">
            <h1 className='text-[28px] leading-[38px] font-normal text-[#66FCF1]'>BlokBets</h1>
            
            <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>0% Implicit Profit</span>  </div>
              <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>No “Juice” or Fees</span>  </div>
              <div className="flex my-4 items-center">             <img src={rectangle} alt="" />
              <span className='mx-4'>Earning Potential Set by Bettors</span>  </div>
             

          </div>
          


        </div>


      </div>
    



      
      </>

  )
}

export default Facts
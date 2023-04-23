import React from 'react'
import { Link } from 'react-router-dom'
import line from './../../assest/img-home/Line.png'
import arrow1  from './../../assest/img-home/Arrow 1.png'
import box from './../../assest/img-home/box.png'
import { FaArrowRight } from "react-icons/fa";
import useTitle from '../../Router/useTitle'



const Bets = ({account}) => {


  useTitle('Bets')


  
  return (
    <>
    <div className="px-8 sm:px-12  py-14">

      <div className="sm:px-12">


        <div className=" relative	">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House. Unleash Profit Protential {account}
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Offered Bets
            </h1>
            <Link to={'/link'}>
              <button className='sm:absolute sm:bottom-0 sm:right-0 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>
                Link Crypto <br /> wallet
              </button>
            </Link>


          </div>
          



        


      </div>


      </div>

      <div className="bg-[#121212] px-8 sm:px-12  py-14">
      <div className="sm:px-12 ">
             <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> <span className='px-4  sm:text-[40px] text-[30px] text-white sm:leading-[45px] font-semibold'>UFC: Usman V. Edwards.</span></h1>
             <p className='text-white my-4 sm:ml-[90px] tracking-wide text-[14px]'>
             Time Left to Bet: <span className='text-[#59DCD3] '>124 Minutes</span>
          </p>
      </div>
        
        
      </div>


      <div className="px-8 sm:px-12  py-14">
        <div className="sm:px-12">


          <div className="w-full  mx-auto sm:w-[70%]">
           
            <div className="flex px-1 my-2 text-white text-[25px] justify-between"><p>Usman</p> <p>Edwards</p></div>
            <img className='w-[100%] py-4' src={line} alt="" /> 
            <div className="grid px-2  grid-cols-3 ">
<div>
                <span className="text-center text-[20px] leading-[40px]  sm:text-start text-white">24%</span> <br /> 
                <span className="text-center text-[20px] leading-[40px]  sm:text-start text-white">1.2 Eth</span> <br /> 

                <span className="text-center text-[20px] leading-[40px]  sm:text-start text-white">168</span> <br /> 


</div> 
<div className='text-center'>
<span className="text-white leading-[40px] text-[20px]  text-center sm:text-start">Popular Vote</span> <br />

<span className="text-center leading-[40px] text-[20px]  sm:text-start text-white">Amount Bet</span> <br /> 

<span className="text-center leading-[40px]  text-[20px] sm:text-start text-white">Bettor Count</span> <br /> 
</div> 
<div className='text-end'>
<span className="text-white text-center text-[20px] leading-[40px] sm:text-start">O24%</span> <br />
<span className="text-center leading-[40px] text-[20px] sm:text-start my-2 text-white">3.8 Eth</span> <br /> 

<span className="text-center leading-[40px] text-[20px] sm:text-start my-2 text-white">532</span> <br /> 
</div>
            </div>
            
        

          </div>

    <div className="grid  pb-[100px] 	 my-12 mt-[100px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    
            <div className="flex mb-4">

<div className="">

  <img className='w-[80px] lg:w-[auto]' src={box} alt="" />
  <p className='text-white mt-5'> Select Winner</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2 text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <div className="flex  mb-4">

<div className="">

  <img className='w-[80px] lg:w-[auto]' src={box} alt="" />
  <p className='text-white mt-5'> Bet Amount</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2 text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <div className="flex ">

<div className="">

  <img className='w-[80px] lg:w-[auto]' src={box} alt="" />
  <p className='text-white mt-5'> Potential Earnings</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2  text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <Link to={''}><button className='absolute bottom-100 mt-[120px] sm:mt-[60px] lg:mt-0 left-[20%] lg:left-0 sm:left-[40%]  lg:relative text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none  py-4 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>BET NOW</button></Link>

            
            

           </div>



        </div>
      </div>


     

      
      



      





</>
  )
}

export default Bets
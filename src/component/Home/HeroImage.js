import React from 'react'
import david from './../../assest/img-home/david.png'
import arrow1 from './../../assest/img-home/Arrow 1.png'
import arrow3 from './../../assest/img-home/Arrow 3.png'
import arrow4 from './../../assest/img-home/Arrow 4.png'
import arrow7 from './../../assest/img-home/Arrow 7.png'



import metamask from './../../assest/img-home/metamask.png'
import Coinbase from './../../assest/img-home/Coinbase.png'
import Hands from './../../assest/img-home/Hands Compass.png'
import Vector11 from './../../assest/img-home/Vector11.png'
import Vector4  from './../../assest/img-home/Vector4.png'
import { Link } from 'react-router-dom'






const HeroImage = () => {
  return (<>
      <div className='bg-[black] hidden md:block  px-8 sm:px-12 py-12'>
          <div className="sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="flex items-center">
                  <div className="w-[252px] flex flex-col  items-center"><img className=' w-[120px] h-[120px]' src={david} alt="" /> <Link to={'/register'}><h1 className='mt-[-15px]'>Sign Up</h1></Link></div>
                  
                  <div className=""><img className='w-[80px] h-[80px]' src={arrow1} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
                  <div className=" w-[252px] flex flex-col justify-center items-center"><img className=' w-[80px] h-[80px] ' src={Coinbase} alt="" /> <h1 className='mt-6 '>Link Crypto Wallet</h1></div>
                  
                  <div className="pb-4">< img className='mx-4 w-[80px] h-[80px] mt-[-30px]' src={metamask} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
              <div className=" w-[252px] flex flex-col justify-center items-center"><img className='w-[80px] h-[80px]' src={arrow1} alt="" /></div>
                  
                  <div className="px-4"><p className='text-[25px] leading-[46px] uppercase'>Select a bet and 
crypto wager</p></div>
              </div>
          </div>






          <div className="sm:px-12 mt-8 mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="flex items-center">
                  <div className="w-[252px] "><h1 className='text-center text-[25px] leading-[46px] uppercase'>Winning Pool is Paid 
OUT 
proportiona <br /> lly from 
the Losers Pool </h1></div>
                  
                  <div className=""><img className='w-[80px] h-[80px] mx-3' src={arrow3} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
                  <div className="w-[252px] flex flex-col justify-center items-center"><img className='w-[120px] h-[80px]' src={Hands} alt="" /> <h1 className='mt-6 '>Wait for Results</h1></div>
                  
                  <div className="pb-4">< img className='mx-4 w-[80px] h-[80px] mt-[-30px]' src={arrow3} alt="" /></div>
              </div>
              <div className="flex items-center justify-center mt-4">
                  <div className="flex-col justify-center">
                      <img className= 'mx-auto w-[80px] h-[80px]' src={arrow4} alt="" />
                      <div className="w-[252px]">
                      <h1 className='text-center text-[25px] leading-[46px] uppercase'>
                      All Wager amounts 
are held in a 
decentralized pool 
until results post</h1>
                      </div>

                 </div>
              </div>
          </div>


          <div className="sm:px-12 lg:justify-start  justify-center  flex items-center mt-4">
                  <div className="flex-col justify-center">
                      <img className= 'mx-auto w-[80px] h-[80px]' src={arrow4} alt="" />
                      <div className="">
                       <img className='mt-4 w-[90px] h-[90px]' src={Vector11} alt="" />
                      </div>

              </div>
              <div className="w-[252px] hidden md:block mt-[100px] mx-4 sm:mx-0"><h1 className='text-center text-[25px] leading-[46px] uppercase'>earnings 
Automatically 
Passed into <br /> crypto 
Wallet</h1></div>
                  
          </div>
          <div className="md:hidden flex justify-center mt-12  "><h1 className='text-center  text-[25px] leading-[46px] uppercase'>earnings 
Automatically 
Passed into <br /> crypto 
Wallet</h1></div>

      </div>





      <div className='bg-[black] block md:hidden  px-8 sm:px-12 py-12'>
          <div className="sm:px-12 ">
              
              <div className="flex justify-center">
                  <img className='w-[100px] h-[120px] mt-[-10px]' src={david} alt="" />
                  <img className='w-[70px] h-[80px] mx-3' src={Coinbase} alt="" />
                  <img className='w-[70px] h-[80px]' src={metamask} alt="" />


                  
              </div>
              <p className='text-center text-white'>1.Sign Up & Link Crypto Wallet</p>

              <div className="flex my-8 items-center justify-end">
                  <img className=' h-[140px] ' src={arrow7} alt="" />
                  <p className='text-center text-white uppercase'>2. Select a bet and <br />

crypto wager</p>


              </div>
              

              <div className="flex my-4 items-center justify-start">
              <p className='text-center text-white uppercase'>3. Event begins and <br />
All Wager amounts <br />
are held in a <br />
decentralized pool <br />
until results post</p>
                  <img className=' h-[140px] ' src={arrow7} alt="" />
                 


              </div>
              
              <div className="flex my-8 items-center justify-end">
                  <img className=' h-[140px] ' src={arrow7} alt="" />
                  <p className='text-center text-white uppercase'>4. Event ends and Winning <br /> Pool is Paid
OUT <br />
proportionally from  <br />
the Losers Pool </p>


              </div>



              <div className="flex my-4 items-center justify-start">
              <p className='text-center text-white uppercase'>5. earnings <br />
Automatically <br />
Passed into crypto <br />
Wallet</p>
                  <img className='mx-4 w-[50] h-[60px] ' src={Vector4} alt="" />
                 


              </div>


              
             </div>

      </div>
      </>
  )
}

export default HeroImage
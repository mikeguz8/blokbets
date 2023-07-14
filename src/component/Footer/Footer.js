import React from 'react'

import { FaInstagram, FaFacebook } from "react-icons/fa";
import homemain from './../../assest/img-home/homemain.png'


const Footer = () => {
  return (
    <> <div className="px-8 sm:px-12  py-14">
    <div className="flex flex-col-reverse lg:flex-col   mt-8">
        <div className=" sm:mt-0 mx-auto mt-20 flex flex-col  justify-center">
          <div className="flex justify-center">
          <img className='w-[302px] h-[93px] sm:w-full sm:h-full' src={homemain} alt="" />

          </div>
</div>
<footer className="text-center sm:text-start my-8 justify-center gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-[#D0D0D0]">
<div>
<span className="text-center sm:text-start text-white">Who We Are</span> <br /> 
<a className="link hover:no-underline text-center text-[15px] sm:text-start  w-[274px] link-hover">We are a small team of dedicated programmers and idea folks who see the blockchain as the solution to many worldly problems.</a>

</div> 
<div>
<span className="text-white text-center sm:text-start">Our Vision</span> <br />
<a className="link hover:no-underline text-[15px]	 w-[294px] text-center sm:text-start link-hover">To disrupt the gambling and sportsbetting industry not only by offering cryptocurrency transactions but by utilizing the benefits of blockchain technology to create the best user experience possible.</a>

</div> 
<div>
<span className="text-white text-center sm:text-start">Our Mission</span> <br />
<a className="link hover:no-underline text-[15px] w-[293px] text-center sm:text-start link-hover">Our mission is to make betting transparent and to help users reach their full potential in wagering and in life.</a>

</div>
</footer>


</div>
  </div>

      

      <div className='px-12 bg-[black]'>
          



          <footer className="footer sm:px-10 py-10 sm:flex ">
              
              <div className="sm:w-[38%]">
                 
                  <h1 className='text-xl font-semibold text-white'> BlokBets</h1>
              </div>
              <div className="flex sm-w[62%] justify-center items-center overflow-hidden ">
                  <span className='font-normal  md:px-4 text-white'>Home</span>
                  
                  <span className='font-normal sm:px-4 text-white'>Legal</span>
              </div>
</footer> 
          <footer className="footer sm:px-10 py-4 border-t border-[#828080]  text-white border-base-300">
  <div className="items-center grid-flow-col">
  <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className="md:place-self-center  md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <FaFacebook className='text-[25px]'></FaFacebook>


                      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                      <FaInstagram className='text-[25px]'></FaInstagram>

                      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                  </div>
  </div>
</footer>
      </div>
      </>
  )
}

export default Footer
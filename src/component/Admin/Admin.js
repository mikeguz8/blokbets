import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../Router/useTitle'




const Admin = () => {
  
  useTitle('Admin')
  
  return (
      <div>
           <>
      
      <div className='px-8 sm:px-12  py-14'>
          <div className="sm:px-12">
          <div className=" 	">

       
            


        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House , Unleash Profit Protential

        </p>


        <p>
        
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Admin Page</h1>
              <button id="loadButton" className='sm:left-30 sm:right-30 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'> Refresh & Display Data</button>
              <div id="dataContainer"></div>
              <script src="script.js"> </script>
              
        </p>
        &nbsp
        <p>
        

        <button className='sm:left-30 sm:right-30 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'> Push Data to Refresh Contracts</button>
              
              
        </p>

          </div>
              


          </div>
          

    </div>
  
      </>

    </div>
  )
}

export default Admin



import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react';


import { Line, LineChart, Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import useTitle from '../../Router/useTitle';



const AccountDashboard = () => {

  useTitle('accountDashboard')


  const data = [
    {
      name: 'January',
      price: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: 'Fabruary',
      price: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      price: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      price: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      price: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      price: 2390,
      sales: 3800,
      amt: 2500,
    },
    {
      name: 'Jully',
      price: 3490,
      sales: 4300,
      amt: 2100,
    },
  ];
  



  return (
    <>
       <div className="px-8 sm:px-12  py-14">

<div className="sm:px-12">

<p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
         Eliminate The House, Unleash Profit Protential
        </p>
          <div className=" lg:flex  justify-between 	">
         
        <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Account Dashboard
      </h1>
  
            <div className=" sm:flex ">
                    
              <div className="">
              <Link to={'/link'}><button className='mb-4 sm:mb-0 mx-2 sm:mx-0  text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none h-[60px] px-[52px] text-[10px]  text-normal border-[1px] leading-[20px]   border-[#59DCD3]'>Link Crypto
                <p>wallet</p></button></Link>

              </div>
              <div className="">

              <Link to={'/link'}><button className='mb-4  sm:mb-0 mx-2    text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none h-[60px] px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>Bet 
                 Now </button></Link>
              </div>
            
       </div>

    </div>
    



  


</div>


      </div>
      

      <div className="bg-[#121212] px-8 sm:px-12  py-14">
      <div className="sm:px-12 ">
             <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> <span className='px-4  sm:text-[48px] text-[30px] sm:leading-[50px] text-white font-semibold'>User Stats.</span></h1>
             <p className='text-[#59DCD3] my-4 tracking-wide text-[14px]'>
             See how you are performing
             
              </p>
      </div>
        
        
      </div>


      <div className="px-8 sm:px-12  py-14">

        <div className="sm:px-12">
          <div className=" w-[100%] mx-auto  md:h-[500px]">
          <h1 className='text-white text-center'>Net Earnings [ETH]</h1>

          <ResponsiveContainer>

<LineChart   data={data}>
  <Line dataKey={'price'}></Line>
  <Line dataKey={'sales'}></Line>
  <XAxis   dataKey="name"></XAxis>
  <Tooltip />
  <YAxis></YAxis>
  </LineChart>
            </ResponsiveContainer>
            
          
          </div>
          <div className="mt-[120px] px-12">
            <p className='text-xl my-2 flex justify-between items-center w-full sm:w-[330px] text-white'>Net Earnings [ETH] to Date:
              <span className='text-[#47a09a] text-xl px-4'>1100</span></p>
              <p className='text-xl my-2  flex justify-between w-full sm:w-[330px] text-white'>Number of Bets Placed:
              <span className='text-[#47a09a] text-xl px-4'>11</span></p>
              <p className='text-xl my-2  flex justify-between w-full sm:w-[330px] text-white'>Number of Wins:
              <span className='text-[#47a09a] text-xl px-4'>7</span></p>
              <p className='text-xl my-2  flex justify-between w-full sm:w-[330px] text-white'>Number of Losses:
              <span className='text-[#47a09a] text-xl px-4'>4</span></p>
              <p className='text-xl my-2  flex justify-between w-full sm:w-[330px] text-white'>Active Bets:
              <span className='text-[#47a09a] text-xl px-4'>6</span></p>
          </div>

          

        </div>
      </div>


      <div className="bg-[#121212] px-8 sm:px-12  py-14">
      <div className="sm:px-12 ">
             <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> <span className='px-4  sm:text-[48px] text-[30px] sm:leading-[50px] text-white font-semibold'>Active Bets.</span></h1>
             <p className='text-[#59DCD3] my-4 tracking-wide text-[14px]'>
             Bets that are completed and paid out
              </p>
      </div>
        
        
      </div>

    
      <div className="bg-black lg:px-12  py-14">
        <div className="lg:px-12">
        <div className="overflow-x-auto">
  <table className="table  border-none w-full bg-black">
    <thead>
      <tr className='bg-black'>
        <th className='bg-black text-white text-[20px]'>Event</th>
        <th className='bg-black  text-white text-[20px]'>Category</th>
                  <th className='bg-black  text-white text-[20px]'>Bet</th>
                  <th className='bg-black  text-white text-[20px]'>ETC</th>
                  <th className='bg-black  text-white text-[20px]'>Amount</th>
                  <th className='bg-black  text-white text-[20px]'>Potential Winnings</th>

      </tr>
    </thead>
    <tbody className='border-none bg-[#ccd1d3e0]  border-0'>
    <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>Qatar V. Senegal</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Soccer</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>8pm EST</td>

                  <td className='border-none bg-[#ccd1d3e0]'>2.75 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>4.1 ETH</td>
      </tr>
      <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>England V. Usa</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Soccer</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Usa Wins</td>
                  <td className='bg-[#ccd1d3e0]'>4pm EST</td>

                  <td className='border-none bg-[#ccd1d3e0]'>2.75 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>1.1 ETH</td>
      </tr>

     
    </tbody>
  </table>
</div>
        </div>
      </div>





      <div className="bg-[#121212] px-8 sm:px-12  py-14">
      <div className="sm:px-12 ">
             <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> <span className='px-4  sm:text-[48px] text-[30px] sm:leading-[50px] text-white font-semibold'>Completed Bets</span></h1>
             <p className='text-[#59DCD3] my-4 tracking-wide text-[14px]'>
             Bets that are completed and paid out              </p>
      </div>
        
        
      </div>



      <div className="bg-black lg:px-12  py-14">
        <div className="lg:px-12">
        <div className="overflow-x-auto">
  <table className="table  border-none w-full bg-black">
    <thead>
      <tr className='bg-black'>
        <th className='bg-black text-white text-[20px]'>Event</th>
        <th className='bg-black  text-white text-[20px]'>Category</th>
                  <th className='bg-black  text-white text-[20px]'>Bet</th>
                  <th className='bg-black  text-white text-[20px]'>Result</th>
                  <th className='bg-black  text-white text-[20px]'>Earnings</th>
                  <th className='bg-black  text-white text-[20px]'>Date</th>

      </tr>
    </thead>
    <tbody className='border-none bg-[#ccd1d3e0]  border-0'>
    <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>CHI Bears V. NY Jets</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Football</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>W</td>

                  <td className='border-none bg-[#ccd1d3e0]'>600 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>10/21/22</td>
      </tr>
      <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>CHI Bears V. NY Jets</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Football</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>W</td>

                  <td className='border-none bg-[#ccd1d3e0]'>600 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>10/21/22</td>
      </tr>
                





      <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>CHI Bears V. NY Jets</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Football</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>W</td>

                  <td className='border-none bg-[#ccd1d3e0]'>600 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>10/21/22</td>
      </tr>
                





      <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>CHI Bears V. NY Jets</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Football</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>W</td>

                  <td className='border-none bg-[#ccd1d3e0]'>600 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>10/21/22</td>
      </tr>
                



      <tr >
        <th  className='border-none  bg-[#ccd1d3e0]'>CHI Bears V. NY Jets</th>
        <td  className='border-none bg-[#ccd1d3e0]'>Football</td>
                  <td className='border-none bg-[#ccd1d3e0]'>Qatar Wins</td>
                  <td className='bg-[#ccd1d3e0]'>W</td>

                  <td className='border-none bg-[#ccd1d3e0]'>600 ETH</td>
                  <td className='border-none bg-[#ccd1d3e0]'>10/21/22</td>
      </tr>

     
    </tbody>
  </table>
</div>
        </div>
      </div>


    
    
    </>
  )
}

export default AccountDashboard
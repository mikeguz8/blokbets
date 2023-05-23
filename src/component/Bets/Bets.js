import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import line from './../../assest/img-home/Line.png'
import arrow1  from './../../assest/img-home/Arrow 1.png'
import box from './../../assest/img-home/box.png'
import { FaArrowRight } from "react-icons/fa";
import useTitle from '../../Router/useTitle'

import { ethers } from 'ethers'

import BlokBetsAbi from '../../contractsData/BlokBets.json'
import BlokBetsAddress from '../../contractsData/BlokBets-address.json'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

const network = 'sepolia'
// const network = 'ethereum'

let loadingContracts = false

const Bets = () => {
  useTitle('Bets')
  const [account, setAccount] = useState(null)
  const [blokBets, setBlokBets] = useState(null)
  const [activeBets, setActiveBets] = useState([])
  const [teamSelected, setTeamSelected] = useState(0)
  const [betAmount, setBetAmount] = useState(0.1)
  const [lastBetId, setLastBetId] = useState(0)
  const [lastBet, setLastBet] = useState(null)

  const web3Handler = async () => {
    console.log("web3Handler")
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("account:", accounts[0])
    setAccount(accounts[0])
    
    const providerTemp = new ethers.providers.Web3Provider(window.ethereum)
    const signer = providerTemp.getSigner()

    const blokBetsTemp = new ethers.Contract(BlokBetsAddress.address, BlokBetsAbi.abi, signer)
    setBlokBets(blokBetsTemp)
  }

  const placeBet = async () => {
    if (account == null) {
      await web3Handler()
      return
    }
    console.log("placeBet", teamSelected, betAmount, lastBetId)
    
    try {
      await(await blokBets.placeBet(lastBetId, teamSelected, {value: toWei(betAmount)})).wait()
      alert("Bet placed successfully!")
    } catch (error) {
        console.error("Custom error handling: " + error);
        alert(error)
    }
  }

  const loadContracts = async () => {
    if(loadingContracts) return
    loadingContracts = true

    console.log("loadContracts")
    const providerTemp = new ethers.providers.InfuraProvider(network, process.env.REACT_APP_INFURA_PROJECT_ID);
    // const providerTemp = new ethers.providers.Web3Provider(window.ethereum)

    const blokBetsTemp = new ethers.Contract(BlokBetsAddress.address, BlokBetsAbi.abi, providerTemp)
    console.log("blokBetsTemp", blokBetsTemp.address)
    if (blokBets == null)
      setBlokBets(blokBetsTemp)

    parseLastBetId(blokBetsTemp)
  }

  const parseLastBetId = async (blokBets) => {
    console.log("parseLastBetId")

    let activeBetsTemp = await blokBets.showActiveBets()
    setActiveBets(activeBetsTemp)
    console.log("activeBetsTemp")
    console.log(activeBetsTemp)

    setLastBetId(parseInt(await blokBets.betId()) - 1)

    let lastBetIndex = activeBetsTemp.length - 1;
    let lastBet = activeBetsTemp[lastBetIndex]
    console.log("lastBet", lastBet)

    setLastBet(lastBet)
  }

  const potentialEarnings = () => {
    return betAmount * 13
  }

  const handleDropdownChange = (eventKey) => {
    setTeamSelected(eventKey);
    // Perform any desired action based on the selected option
    console.log('Selected Option:', eventKey);
  };

  const onChangeChosenAmount = (e) => {
      setBetAmount(e.target.value, 10);
  }

  const minutesLeft = (seconds) => {
    let dateNow = Math.floor(Date.now() / 1000)
    let minutesCount = Math.floor((seconds - dateNow) / 60)
    return minutesCount
  }

  useEffect(() => {
    loadContracts()
  }, [])
  
  return (
    <>
    <div className="px-8 sm:px-12  py-14">

      <div className="sm:px-12">


        <div className=" relative	">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House. Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Offered Bets
            </h1>
            
            {account ? (
                        <button className='sm:absolute sm:bottom-0 sm:right-0 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>{account.slice(0, 4) + '...' + account.slice(38, 42)}</button>
                    ) : (
                      <button onClick={web3Handler} className='sm:absolute sm:bottom-0 sm:right-0 text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>Link Crypto <br /> wallet</button>
                    )}


          </div>
          



        


      </div>


      </div>

      <div className="bg-[#121212] px-8 sm:px-12  py-14">
        
      {lastBet != null ? (
        <div className="sm:px-12 ">
              <h1 className='flex items-center'> <div className='bg-[#6fe8e0] h-[2px] w-[80px]'></div> 
              <span className='px-4  sm:text-[40px] text-[30px] text-white sm:leading-[45px] font-semibold'>{lastBet[1]} V. {lastBet[2]}</span></h1>
              <p className='text-white my-4 sm:ml-[90px] tracking-wide text-[14px]'>
              Time Left to Bet: <span className='text-[#59DCD3] '>{minutesLeft(parseInt(lastBet[3]))} Minutes</span>
            </p>
        </div>
      ) : (
        <div style={{color: "white"}}>No current active bet</div>
      )}
        
        
      </div>


      <div className="px-8 sm:px-12  py-14">
          {lastBet != null ? (
        <div className="sm:px-12">

          <div className="w-full  mx-auto sm:w-[70%]">
           
            <div className="flex px-1 my-2 text-white text-[25px] justify-between"><p>{lastBet[1]}</p> <p>{lastBet[2]}</p></div>
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

  <Dropdown onSelect={handleDropdownChange} style={{color: "white"}}>
      <Dropdown.Toggle id="dropdown-basic">
        Select Winner
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="0">{lastBet[1]}</Dropdown.Item>
        <Dropdown.Item eventKey="1">{lastBet[2]}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  <p className='text-white mt-5'> Select Winner</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2 text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <div className="flex  mb-4">

<div className="">

<Form>
  <Form.Group controlId="formRange" className="d-flex align-items-center justify-content-center">
      <Form.Control
          type="number"
          value={betAmount}
          step={.001}
          onChange={onChangeChosenAmount}
          style={{ width: '100px' }}
      />
  </Form.Group>
  </Form>
  <p className='text-white mt-5'> Bet Amount</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2 text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <div className="flex ">

<div className="" style={{color: "white"}}>

   {potentialEarnings()}
  <p className='text-white mt-5'> Potential Earnings</p>

</div>
<div className="">
  <FaArrowRight className='text-white mt-[8px] mx-2  text-[30px] lg:text-[60px]'></FaArrowRight>
</div>
            </div>
            <button onClick={placeBet} className='absolute bottom-100 mt-[120px] sm:mt-[60px] lg:mt-0 left-[20%] lg:left-0 sm:left-[40%]  lg:relative text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none  py-4 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>
              {account == null ? (
                <>CONNECT WALLET</>
              ) : (
                <>BET NOW</>
              )}
            </button>

            
            

           </div>



        </div>
          ) : (
            <div style={{color: "white"}}>No current active bet</div>
          )}
      </div>


     

      
      



      





</>
  )
}

export default Bets
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../Router/useTitle'
import Web3 from 'web3';

const CryptoWallet = ({account, setAccount, connectWallet}) => {
  useEffect(()=>{
    connectWallet()
  },[])
  useTitle('CryptoWallet')
  return (
      <div className='px-8 sm:px-12  py-14'>
          <div className="sm:px-12">
          <div className=" 	">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House, Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Link Crypto Wallet
            </h1>
            <button onClick={connectWallet} className='text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>{account}</button>


          </div>
              


          </div>
          

    </div>
  )
}

export default CryptoWallet
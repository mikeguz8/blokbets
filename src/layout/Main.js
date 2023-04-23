import React,{useEffect, useState} from 'react'
import { ethers } from 'ethers'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom"
import Footer from '../component/Footer/Footer'
import Header from '../component/Header/Header'
import AccountDashboard from '../component/AccountDashboard/AccountDashboard'
import BetAccept from '../component/betAccept/BetAccept'
import Bets from '../component/Bets/Bets'
import Error from '../component/error/Error'
import GettinStarted from '../component/GettingStarted/GettinStarted'
import Home from '../component/Home/Home'
import Legal from '../component/Legal/Legal'
import CryptoWallet from '../component/linkwithcrypto/CryptoWallet'
import Login from '../component/Login/Login'
import Register from '../component/Register/Register'

import BlokBetsAbi from '../contractsData/BlokBets.json'
import BlokBetsAddress from '../contractsData/BlokBets-address.json'

const Main = () => {
  const [account, setAccount] = useState('Link Crypto Wallet')
  const [provider, setProvider] = useState({})
  const [blokBets, setBlokBets] = useState(null)
  
  const connectWallet = async() => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    await loadContracts()
  }

  const loadContracts = async() => {
    const providerTemp = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(providerTemp)
    const signer = providerTemp.getSigner()
    
    const blokBetsTemp = new ethers.Contract(BlokBetsAddress.address, BlokBetsAbi.abi, signer)
    setBlokBets(blokBetsTemp)
    
    console.log("blokBets", blokBets.address)
  }

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
  // return (
  //   <BrowserRouter>
  //     <div>
  //       <Header></Header>
  //       <Routes>
  //           <Route path="/" element={
  //             <Home></Home>
  //           } />
  //           <Route path="/bets" element={
  //             <Bets account={account} ></Bets>
  //           } />
  //           <Route path="/login" element={
  //             <Login></Login>
  //           } />
  //           <Route path="/register" element={
  //             <Register></Register>
  //           } />
  //           <Route path="/legal" element={
  //             <Legal></Legal>
  //           } />
  //           <Route path="/getstart" element={
  //             <GettinStarted></GettinStarted>
  //           } />
  //           <Route path="/link" element={
  //             <CryptoWallet account={account} setAccount={setAccount} connectWallet={connectWallet} ></CryptoWallet>
  //           } />
  //           <Route path="/betaccept" element={
  //             <BetAccept></BetAccept>
  //           } />
  //           <Route path="/dashboard" element={
  //             <AccountDashboard></AccountDashboard>
  //           } />
  //         </Routes>
  //       <Footer></Footer>
  //     </div>
  //   </BrowserRouter>
  // )
}

export default Main
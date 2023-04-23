import React from 'react'
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

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={
              <Home></Home>
            } />
            <Route path="/bets" element={
              <Bets></Bets>
            } />
            <Route path="/login" element={
              <Login></Login>
            } />
            <Route path="/register" element={
              <Register></Register>
            } />
            <Route path="/legal" element={
              <Legal></Legal>
            } />
            <Route path="/getstart" element={
              <GettinStarted></GettinStarted>
            } />
            <Route path="/link" element={
              <CryptoWallet></CryptoWallet>
            } />
            <Route path="/betaccept" element={
              <BetAccept></BetAccept>
            } />
            <Route path="/dashboard" element={
              <AccountDashboard></AccountDashboard>
            } />
          </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}

export default Main
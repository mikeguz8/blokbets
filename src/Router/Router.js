import { useContext } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'
import AccountDashboard from '../component/AccountDashboard/AccountDashboard'
import BetAccept from '../component/betAccept/BetAccept'
import Bets from '../component/Bets/Bets'
import Error from '../component/error/Error'
import GettinStarted from '../component/GettingStarted/GettinStarted'
import Home from '../component/Home/Home'
import Legal from '../component/Legal/Legal'
import Admin from '../component/Admin/Admin'
import CryptoWallet from '../component/linkwithcrypto/CryptoWallet'
import Login from '../component/Login/Login'
import Register from '../component/Register/Register'
import Main from '../layout/Main'



 const router = createBrowserRouter  ([
  
    
    {
         path: '/',
        errorElement:<Error></Error>,
        element: <Main></Main>,
        children: [
       {
            path:'/',
             element:<Home></Home>
        }
        ,
         {
           path: '/home',
           element:<Home></Home>
            },
            
            /*
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            */  

            {
                path: '/bets',
                element:<Bets></Bets>
            }
          ,
              
                {
                    path: '/legal',
                    element:<Legal></Legal>
                  }
          ,
          {
            path: '/getstart',
            element:<GettinStarted></GettinStarted>
          },
          {
            path: '/link',
            element:<CryptoWallet></CryptoWallet>
          },
          {
            path: '/betaccept',
            element:<BetAccept></BetAccept>
          },
          {
            path: '/dashboard',
            element:<AccountDashboard></AccountDashboard>
          },

          {
            path: '/admin',
            element:<Admin></Admin>
          }
     
        ]
  }

])

export default router
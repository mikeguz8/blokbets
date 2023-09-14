import React,{useState, useEffect} from 'react'
import API from './api'
import { Link } from 'react-router-dom';
import "./Admin.css";

const Admin = () => {
  
  const [data, setData] = useState();
    
  useEffect(() => {
    
    API.get('events', {
      headers: {
        'X-RapidAPI-Key': '05c498e679msh8aaf12458c5a171p1bbce7jsnb943987c9ffc',
        'X-RapidAPI-Host': 'sports-data-api.p.rapidapi.com'
      }

    }).then((res) => {
      setData(res)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])  

  //<div className='sm:left-30 sm:right-30 text-white uppercase  rounded-none font-normal py-2 px-[60px]'>
  //<h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Admin Page</h1>
    
  return (

    <div>
      <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Admin Page</h1>

    <div className="container">

      <div className="match">


{data?.data?.scores?.map(({status, teams}) => 

        <div className="container1">          

          <div className="match-content">
            <div className="column1">
              <div className="team">
                <h2 className="team-name">{ teams?.awayTeam.displayName}</h2>
              </div>
            </div>

            <div className="column2">
              <div className="atsign">
                <h2 className="at"> @ </h2>
              </div>
            </div>

            <div className="column3">
              <div className="team">
                <h2 className="team-name">{ teams?.homeTeam.displayName}</h2>
              </div>
            </div>

            <div className="column4">
              <div className="match-details">
                <h2 className="timedetail">{ status?.detail}</h2>
              </div>
            </div>

            <div className="column4">
              <div className="match-details">
                <h2 className="status">{ status?.state}</h2>
              </div>
            </div>

          </div>
          
          </div>

)}

        </div>
        </div> 
        </div>
          
  )
          

}


export default Admin
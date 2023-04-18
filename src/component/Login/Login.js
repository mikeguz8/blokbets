import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthProvider';
import useTitle from '../../Router/useTitle';

import homemain from './../../assest/img-home/homemain.png'

const Login = () => {


  useTitle('Login')
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  
  




  if (user?.uid) {
    navigate("/");
}
  
  const { signin, loading, setLoading, signInWithGoogle,resetPassword } = useContext(AuthContext);
  
  const [userEmail, setUserEmail] = useState('');

  const location = useLocation();
  const from= location.state?.from?.pathName || '/'



  const handleSubmit = (event) => {
  

    event.preventDefault()
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

   

    signin(email, password).then(result => {
      form.reset();

      toast.success('login successfully')
      navigate(from, { replace: true })
    })
      .catch(err => {
        toast.error(err.message)
        console.log(err)
        setLoading(false)
      })
}



  return (
    
    <div>

    
    <div className="px-8 sm:px-12">
      <div className="sm:px-12">
      <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
             Eliminate The House, Unleash Profit Protential
            </p>
            <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Login
          </h1>
          
        
      <div className="">
      <form onSubmit={handleSubmit}>
          <div className="form-control ">
              <label className="label"> <span className="label-text text-[#59DCD3]"> Email Address:</span></label>
              <input placeholder='Email Address' name='email' type="text"
                  {...("email", {
                      required: "Email Address is required"
                  })}
                  className="py-2 px-4 sm:w-[60%]" />
              { <p className='text-red-600'>{}</p>}
          </div>



          <div className="form-control  my-8">
              <label className="label"> <span className="label-text text-[#59DCD3]">Password</span></label>
              <input placeholder='Password' name='password' type="password"
                  {...("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                  })}
                className="my-6 py-2 px-4 sm:w-[60%] " />
              {/* <div className="flex  items-center">
              <input type="checkbox"  className="checkbox bg-white rounded-none" />
                <label className='text-[#59DCD3] mx-4 my-2 tracking-wide text-[14px]' htmlFor="">I have read and accept the privacy policy and allow blokBets to collect and store the data I submit through this form.</label>

              </div> */}
                              <div to={'/login'}><button className=' text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-3 px-12 text-[10px] border-[1px] border-[#59DCD3]'>Login</button></div>

                    <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>Already have an account?</p>
                    <Link to={'/register'}><button className='text-white my-6 uppercase  rounded-none font-normal hover:bg-[#47a09a]  outline-none py-3 px-12 mr-6 border-[1px] text-[10px] border-[#59DCD3]'>SignUp</button></Link>

                    </div>
                    <div className="flex w-full justify-center text-center">
                    

                    </div>
          <div className='my-6'>
              { <p className='text-red-600'>{}</p>}
          </div>
      </form>
  </div>
        


      </div>







    </div>

  </div>
  )
}

export default Login
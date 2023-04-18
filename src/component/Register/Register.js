import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthProvider'
import useTitle from '../../Router/useTitle'

import homemain from './../../assest/img-home/homemain.png'

const Register = () => {


  useTitle('Register')
  const [error, setError] = useState('');


  const navigate = useNavigate();


  const {user}=useContext(AuthContext)





  if (user?.uid) {
    navigate("/");
}

  const {  createUser,updateUserProfile,verifyEmail,loading,setLoading,signInWithGoogle} = useContext(AuthContext)
  const location = useLocation();
  const from= location.state?.from?.pathName || '/'

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

    console.log(password, email,name);
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      form.reset();
      handleUpdateUser(name)

      toast.success('Sign up successfully')
      handleEmailVerification();



      navigate(from, { replace: true })



    })
    .catch(e => {
        console.error(e);
      toast.error(e.message)
      
      });
      

  }

  const handleUpdateUser = (name) => {
    updateUserProfile({displayName: name})
        .then(() => {
            setLoading(false)
        })
        .catch(error => {
            toast.error(error.message, { autoClose: 500 })
        })
}
  
  const handleEmailVerification  = () => {
    verifyEmail()
    .then(() =>{})
    .catch(error => console.error(error));
}






  return (

  



    <div>

    
      <div className="px-8 sm:px-12">
        <div className="sm:px-12">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House, Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Register
            </h1>
            
          
          <div className="">
            
          <form
            onSubmit={handleSubmit}
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className="form-control ">
                <label  className="label"> <span className="label-text text-[#59DCD3]">User Name</span></label>
                <input placeholder='User Name' name='name'  type="text"
                    {...("name", {
                        required: " Name"
                    })}
                    className="py-2 px-4 sm:w-[60%]" />
                { <p className='text-red-600'>{}</p>}
            </div>

          

              

              <div className="form-control my-8">
                <label className="label"> <span className="label-text text-[#59DCD3]">Email Address:</span></label>
                <input placeholder='Email Address' name='email'  type="text"
                    {...("email", {
                        required: "Email Address is required"
                    })}
                    className="py-2 px-4 sm:w-[60%]" />
                { <p className='text-red-600'>{}</p>}
              </div>
              

              <div className="form-control my-8">
                <label className="label"> <span className="label-text text-[#59DCD3]">Password:</span></label>
                <input placeholder='Password' name='password'  type="text"
                    {...("password", {
                        required: "password Address is required"
                    })}
                    className="py-2 px-4 sm:w-[60%]" />
                { <p className='text-red-600'>{}</p>}
              </div>
              





            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox w-[40px] h-[70px]'/>
                <span className='block  ml-2 text-xs font-medium text-[#59DCD3] uppercase cursor-pointer'>
                I have read and accept the privacy policy and allow blokBets to collect and store the data I submit through this form.
                </span>
              </label>
            </div>

            <div><button  className='text-white my-6 uppercase  rounded-none font-normal hover:bg-[#47a09a]  outline-none py-3 px-12 mr-6 border-[1px] text-[10px] border-[#59DCD3]'>SignUp</button></div>
            </form>
            
            <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>Already have an account?</p>

<Link to={'/login'}><button className=' text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-3 px-12 text-[10px] border-[1px] border-[#59DCD3]'>Login</button></Link>




    </div>
          

  
        </div>







      </div>

    </div>
  )
}

export default Register
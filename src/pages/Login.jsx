import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import { useSelector } from "react-redux";
const Login = () => {
  const user="";
  const {
         register,
         handleSubmit,
          formState:{ errors },
        }=useForm()
      
    const navigate=useNavigate()

const submitHandler=async(data)=>{
  console.log('submitted')
}
     useEffect(() => {
      user && navigate('/dashboard');
     },[user]);
    
  return <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-pink-100'>
        <div  className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'> 
             {/*left side*/}
             <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>  
                <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
                  
                  <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base text-pink-100 bg-fuchsia-900 border-fuchsia-900 '>
                    Manage your tasks with ease and efficiency!
                  </span>
                  <p className='flex flex-col gap-1 font-black text-center text-3xl md:text-4xl text-fuchsia-900'>
                    <span> Welcome To Taskly</span>
                  </p>
                  <div className='cell'>
                    <div className='circle bounce-rotate'> </div>
                
                    </div>
                  </div>        
             </div>
            
             {/*right side*/}
             <div className='md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(submitHandler)}
                  className='form-container w-full flex flex-col gap-y-10 bg-white px-16 pt-20 pb-20'
                  >
                    <div className="">
                       <p className="text-fuchsia-800 text-4xl font-extrabold text-center leading-tight">
                         Welcome back!
                       </p>
                       <span className="text-base text-fuchsia-600 text-center mt-2 block">
                         Keep your credentials safe and secure.
                       </span>
                     </div>
                     <div className='flex flex-col gap-y-5 px-4 md:px-8 py-6'>
                         <Textbox 
                         placeholder="email@example.com"
                         type="email"
                         name="email"
                         label="Email Address"
                         className='w-full rounded-full'
                         register={register("email", {
                            required: "Email is required!",
                           })}
                          error={errors.email ? errors.email.message : ""}
                         />
                         <Textbox 
                         placeholder="Your Password"
                         type="password"
                         name="password"
                         label="Password"
                         className='w-full rounded-full' 
                         register={register("password", {
                            required: "Password is required!",
                           })}
                          error={errors.password ? errors.password.message : ""}
                         />
                          <span className='text-sm text-fuchsia-500 text-right cursor-pointer hover:text-fuchsia-900'>
                            Forgot Password?
                          </span>
                          <Button
                          type="submit"
                          label="Submit"
                          className="w-auto h-auto border border-fuchsia-900 text-fuchsia-900 rounded-full hover:bg-fuchsia-900 hover:text-white"
                          />
                     </div>
                    </form>   

             </div>
        </div>
     </div>
}

export default Login
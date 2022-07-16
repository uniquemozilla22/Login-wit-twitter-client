import React, { useContext, useState } from 'react'
import axiosBase from '../../axiosBase'
import { userContext } from '../../context/Context'
import './Login.css'

const LoginScreen = () => {

  const [data, setData ] = useState({
    password:"",
    confirm_password:""
  })

  const [error,setError]= useState({
    message:""
  })


  const user = useContext(userContext)

  console.log(user)


    const loginWithTwitter = async () =>{
        window.open("http://localhost:8000/social/twitter","_self")
    }


    const submitPassword = (e) =>{
      e.preventDefault()

      if(data.password.length >= 6)
      {
        if(data.password !== data.confirm_password) {
          setError({...error,message:"Not Matching Password"})
        }
        else{
          setError({...error, message:""})
          postPassword(data.password)
        }
      }
      else{
        setError({...error,message:"password must be  more than 6 character "})
      }
      

    }


    const postPassword = async (password) =>{

      console.log(password)
      try{
        const response  = await axiosBase.post("user/password",{password})

        console.log(response.data)

      }
      catch(e){
        setError({...e})
      }
    }
  return (
    <div class="card">
      
      <h2 class="title"> Log in</h2>
      <div class="social-login">
         <button class="google-btn" onClick={()=>loginWithTwitter()}>
            <img alt="Twitter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" />
            <p class="btn-text">Sign in with Twitter</p>
         </button>
      </div>

      {user && !user.password ?<form onSubmit={submitPassword}>
       <p class="or"><span>or</span></p>
       <div class="email-login">
          <label for="password"> <b>Password</b></label>
          <input id="password" type="text" placeholder="Enter Password" name="uname" required onChange={(e)=>setData({...data,password:e.target.value})}/>
          <label for="confirmpassword"> <b>Confirm Password</b></label>
          <input id="confirmpassword" type="text" placeholder="Enter Confirm Password" name="uname" onChange={(e)=>setData({...data,confirm_password:e.target.value})} required/>
          </div>
        <p>{error.message}</p>

       <button class="cta-btn" >Submit</button></form>:<></>}
     
</div>
  )
}


export default LoginScreen
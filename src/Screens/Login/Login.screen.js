import React from 'react'
import './Login.css'

const LoginScreen = () => {
    const loginWithTwitter = async () =>{
        window.open("http://localhost:8000/social/twitter","_self")
    }
  return (
    <div class="card">
      <h2 class="title"> Log in</h2>
      <div class="social-login">
         <button class="google-btn" onClick={()=>loginWithTwitter()}>
            <img alt="Google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" />
            <p class="btn-text">Sign in with Twitter</p>
         </button>
      </div>
</div>
  )
}


export default LoginScreen
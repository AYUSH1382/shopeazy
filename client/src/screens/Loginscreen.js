// import React from 'react'

// export default function Loginscreen() {
//     return (
//         <div>
//             <h1>Login Screen</h1>
//         </div>
//     )
// }

import React, { useState , useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import loginvid from "../assets/loginvid.mp4";
// import AOS from 'aos'
// import 'aos/dist/aos.css';


export default function Loginscreen() {
//  AOS.init()
  const loginreducer = useSelector(state=>state.loginReducer)
  const {loading , error} = loginreducer
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  

  const dispatch = useDispatch()

  function login(e) {

    e.preventDefault()
    const user={
        
        email : email , 
        password : password
    }

    dispatch(loginUser(user))
   
    
  }

  useEffect(() => {

    if(localStorage.getItem('currentUser'))
    {
        window.location.href='/'
    }
      
  }, [])

  return (
    <div className='login'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex:"-1"
        }}
        >
          <source src={loginvid} type="video/mp4"/>
        
      </video>
     
      <div className="row justify-content-center m-2" >
      
        <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
          <div className="div">
            <h1 className="text-center m-3" style={{display: "inline"}}>LOGIN</h1>
             <i style={{fontSize:'25px'}} className="fa fa-sign-in" aria-hidden="true"></i>

             {loading && (<Loading/>)}
            {error && (<Error error='Invalid Credentials' />)}
           

              <form onSubmit={login}>
           
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

           

            <div className="text-right">
              <button type='submit' className="btn mt-3">
                LOGIN
              </button>
            </div>
              </form>

            
          </div>
          
          <a style={{color:'black'}} href="/register" className='mt-3'>Click Here To Register</a>
        </div>
      </div>
    </div>
  );
}

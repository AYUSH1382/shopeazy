import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'


export default function Registerscreen() {

    const registerstate = useSelector(state=>state.registerUserReducer)

    const {loading , error , success} = registerstate

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    
    const dispatch = useDispatch()
    function register(){
        if (password != cpassword)
        {
            alert("Password don't match")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded" style={{ textAlign: 'left' }}>
                    
                    

                    <h2 className="text-center m-2" style={{fontSize:"35px"}}>Register</h2>
                    {loading && (<Loading/>)}
                    
                    {error && (<Error error='Email already registered '/>)}
                    {success && (<Success success='User Registered Successfully'/>)}
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value = {name} onChange={(e)=>{setname(e.target.value)}}/>
                        <input required type="text" placeholder="email" className="form-control" value = {email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input required type="password" placeholder="password" className="form-control" value = {password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <input required type="password" placeholder="confirm password" className="form-control" value = {cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
                        <br/>
                        <a style={{color:'black'}}href="/login">Click here to Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
























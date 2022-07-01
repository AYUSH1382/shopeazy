import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
// import loginvid from '../assets/loginvid.mp4'


export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div>
      {/* <video
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
        
      </video> */}
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shopezy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i style={{color:'black'}} className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                // <li>{currentUser.name}</li>
                <div class="dropdown mt-2">
              <a style={{color:'black'}} className=" dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.name}
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/orders">Orders</a></li>
                <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a></li>
               </ul>
            </div>
              ) : (
                <li className="nav-item">
                  <a className="nav-link " href="/login">
                    Login
                  </a>
                  {/* aria-current="page" */}
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

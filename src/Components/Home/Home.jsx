import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

export const Home = () =>{
    const usenavigate = useNavigate();
useEffect(() =>{
let email = sessionStorage.getItem('email');
if(email === '' || email === null){
    usenavigate('/login')
}
})
    return(
<>
        <div>Welcome to home page</div>
        <br></br>
        <div className="logout_btn">

<Link to={'/login'} className="logout_btn_">Logout</Link>

</div>
</>
    )
}
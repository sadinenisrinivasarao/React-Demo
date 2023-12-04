import './signup.css';
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate , Link } from 'react-router-dom';
import { Login } from '../Login/Login';
export const Signup = () =>{
    const [phone, phoneChange] = useState("");
    const [FullName, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [password, passwordChange] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { phone, name, email, password } = state;
    let regobj =  {phone, FullName, email, password } 
    console.log(phone, FullName, email, password);

    fetch('http://localhost:8000/user',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res) =>{
        toast.success('Registration success')
        navigate('/login')
    }).catch((err) =>{
        toast.error('Registration failed' + err.message)
    })
  };

  return (
    <div className="Signup_div">
      <form action="" onSubmit={handleSubmit} method="POST">
        <label for="phone"></label>
        <input required
          className="form-control"
          type="phone"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => phoneChange(e.target.value)}
        /><br />
        <label for="name"></label>
        <input required
          className="form-control"
          type="name"
          id="name"
          name="name"
          placeholder="Enter name"
          value={FullName}
          onChange={(e) => nameChange(e.target.value )}
        /><br />
        <label for="email"></label>
        <input required
          className="form-control"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => emailChange(e.target.value )}
        /><br />
        <label for="password"></label>
        <input required
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => passwordChange(e.target.value )}
        /><br />
        {/* <label for="password2"></label>
        <input
          className="form-control"
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm password"
          value={state.password2}
          onChange={(e) => setState({ ...state, password2: e.target.value })}
        /><br /> */}
        <button type="submit" className="create_btn create_orange">Sign Up</button>
        <div className="already">
          Already has an account ? &nbsp;&nbsp;<Link to={'/login'} class="create_btn">Login</Link>
        </div>
      </form>
    </div>
  );
};

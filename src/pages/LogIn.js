import React from "react";
import logo from "../images/logo.svg";
import pabloArt from "../images/pablo-sign-in 1.svg";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className='login'>
      <article className='header-img-container'>
        <div className='logo'>
          <img src={logo} alt='lendsqr logo' />
        </div>
        <img src={pabloArt} alt='an art by pablo' className='header-img' />
      </article>
      <article className='form-container'>
        <div className='wrapper'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form action=''>
            <div className='email-container'>
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <br />
            <div className='password-container'>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
              />
              <h4>Show</h4>
            </div>
            <h4 className='forgot-password'>FORGOT PASSWORD?</h4>
            <Link to='/dashboard'>
              <button className='submit-btn'>LOG IN</button>
            </Link>
          </form>
        </div>
      </article>
    </section>
  );
};

export default LogIn;

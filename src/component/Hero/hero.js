import React from 'react';
import PropTypes from 'prop-types';
import LoginButton from '../Button/loginButton/logInButton';

const Hero = (props) => {

 return (
  <div
   className="hero"
   data-test="hero-component">
   <div
    className="hero-body"
    data-test="hero-body">
    <h1>HONE YOUR SKILLS</h1>
    <p>
     Learn from professional intructors. It’s easy to learn a new skill, and even easier to get started.
     </p>
    <LoginButton
     responseGoogle={props.responseGoogle}
     auth={props.auth} />
   </div>

  </div>
 )
};

Hero.propTypes = {
 auth: PropTypes.bool,
 responseGoogle: PropTypes.func
}

export default Hero;
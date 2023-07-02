import React from 'react';
import Logo from './images/logo.png'
import { useNavigate } from 'react-router-dom';
import Cigarra from './images/cirgarra.png'

const Win = () => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/');
  }

  return(
    <>
      <div className="center-content logo-div">
        <img src={Logo} className="logo"/>
      </div>

      <div className="container">
        <h1 className="text-style congrats">
          Congratulations
        </h1>
        <p className="text-style subtitle">your answer is correct</p>
        <img src={Cigarra} className="logo-2"/>
        <div>
        <br/> <br/>
        <button className="button" onClick={() => routeChange()}>
          Back
        </button>
        </div>
      </div>
    </>
  )
}

export default Win;
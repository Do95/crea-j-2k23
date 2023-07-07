import React from 'react';
import Logo from './images/logo.png'
import { useNavigate } from 'react-router-dom';
import Hormiga from './images/hormiga.png'
import Footer from './images/footer.png'

const Lose = () => {
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
          Sorry
        </h1>
        <p className="text-style subtitle">but your wrong answer</p>
        <img src={Hormiga} className="logo-2"/>
        <div>
        <br/> <br/>
        <button className="button" onClick={() => routeChange()}>
          Back
        </button>
        </div>
      </div>
      <br></br>
      <div className="footer">
        <img src={Footer}/>
      </div>
    </>
  )
}

export default Lose;
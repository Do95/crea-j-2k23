import React from 'react';
import Logo from './images/logo.png'
import { useNavigate } from 'react-router-dom';
import CigarraAndHormiga from './images/cigarra-and-hormiga-2.png';

const Welcome = () => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/question');
  }

  return(
    <>
      <div className="center-content logo-div">
        <img src={Logo}className="logo"/>
      </div>

      <div className="container">
        <h1 className="text-style h1-welcome">
          Answer correctly and <br/> win a prize
        </h1>
        <img src={CigarraAndHormiga} className="logo-2"/>
        <br/> <br/>
        <div>
          <button className="button" onClick={() => routeChange() }>Start</button>
        </div>
      </div>
    </>
  )
}

export default Welcome;
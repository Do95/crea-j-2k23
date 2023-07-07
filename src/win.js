import React, { useEffect, useState } from 'react';
import Logo from './images/logo.png'
import { useNavigate } from 'react-router-dom';
import Cigarra from './images/cirgarra.png'
import Confetti from 'react-confetti'
import Footer from './images/footer.png'

const Win = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());


  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

  const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/');
  }

  useEffect(() => {
    let audio = new Audio("https://public-images-project.s3.us-east-2.amazonaws.com/win.mp3");
    audio.volume =0.2;
    audio.play();

    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])

  return(
    <>
      <Confetti
        width={screenSize.width}
        height={screenSize.height}
      />
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
      <br></br>
      <div className="footer">
        <img src={Footer}/>
      </div>
    </>
  )
}

export default Win;
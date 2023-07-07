import React, { useEffect, useState } from 'react';
import Logo from './images/logo.png'
import Footer from './images/footer.png'
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const arrayAnswers = [
      {
      id: 1,
      text: "Work hard today to get ready for tomorrow.",
      isCorrect: true,
    },
    {
      id: 2,
      text: "When should always beware of flattering words.",
      isCorrect: false,
    },
    {
      id: 3,
      text: "Those who have all the toil do not always get the profit",
      isCorrect: false,
    }
  ]

  const handleResult = (result) => {
   if(result){
     navigate('/win')
   }else{
    navigate('/lose')
   }
  }

  useEffect(()=>{
    const newOrder = arrayAnswers.sort(() => Math.random() - 0.5);
    setAnswers(newOrder);
  }, []);

  return(
    <>
      <div className="center-content logo-div">
        <img src={Logo} className="logo"/>
      </div>

      <div className="container">
        <h1 className="text-style h1-welcome">
          What is the lesson of the fable?
        </h1>
        <div className="answers">
           {
            answers.map(answer => (			
              <div className="item" key={answer.id}>
                <div className="text" onClick={() => handleResult(answer.isCorrect)}>{answer.text}</div>
              </div>
            ))
           }
        </div>
      </div>
      <br></br>
      <div class="footer">
        <img src={Footer}/>
      </div>
    </>
  )
}

export default Questions;
import React, {useState, useEffect} from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'


export default function QuizResult() {
  //let [acertos, setAcertos] = useState(null)
  //let [questions, setQuestions] = useState([])
  let [result, setResult] = useState('')

  const token = localStorage.getItem("sToken")
  let history = useHistory();

  useEffect(() => {
      async function getData() {
          try {
            const response1 =  await api.get('student/find', {
              headers: { Authorization: `Bearer ${token}` }
            })
            const { acertos, name} = response1.data
            const response2 =  await api.get('question')
            const questions = response2.data.length
            if((acertos * 100) / questions > 80) {
              setResult(`Parabéns, ${name}! Você acertou ${acertos} das ${questions} questões.`)
            } else if(acertos === 0) {
              setResult('Que pena, ${name}! Você não acertou nenhuma questão.') 
            } else if((acertos * 100) / questions <= 25) {
              setResult(`Que pena, ${name}! Você acertou somente ${acertos} das ${questions} questões.`) 
            } else {
              setResult(`${name}, você acertou ${acertos} das ${questions} questões.`)
            }
          } catch(err) {
             alert(err)
          }
      }  
      getData()
   }, [])

  function goToHome() {
  	 history.push('/home')
  }

  async function tryAgain() {
  	 try {
       const response =  await api.get('student/find', {
            headers: { Authorization: `Bearer ${token}` }
        })
  	 	  await api.put(`question/tryAgain/${response.data._id}`)
  	 	  history.push('/quiz')
  	 } catch(err) {
        if (err.response && err.response.data) {
          alert(err.response.data.message)
        }
  	 }
  }		

  if(result !== '') {
      return (
      	<div className="quiz-bg">
    	    <div className="result-wrapper">
    	      <p className="result">{result}</p>
    	      <div className="buttons-wrapper">
    		      <button>Resultados gerais</button>
    		      <button onClick={tryAgain}>Tentar novamente</button>
    		      <button onClick={goToHome}>Página inicial</button>
    		  </div>    
    	    </div>
        </div>
      );
  } else {
    return (
        <div className="quiz-bg">
          <div className="loader"></div>
        </div>
    )
  }    
}
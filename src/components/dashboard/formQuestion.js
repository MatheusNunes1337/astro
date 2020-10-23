import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import '../../assets/css/dashboard.css';

import { MdAddCircle, MdDelete } from "react-icons/md"

        
export default function Question(props) {
	 let [options, setOptions] = useState([])
   let [question, setQuestion] = useState('')
   let [category, setCategory] = useState('')
   let [answer, setAnswer] = useState('')

   if(props.isToUpdate) {
       console.log('você está na página de update question')
       console.log('id da questão', props.questionId)
       /*
       try {
        const id = props.questionId 
        const response = await api.get(`question/q=${id}`)
        console.log(response.data)
        
        } catch(err) {
            alert(err)
        }
       */ 
   } else {
     console.log('kendrick lamar')
   }

  async function handleQuestion(e) {
    e.preventDefault()

    const data = {
      question,
      category,
      options,
      answer
    }
    console.log(data)
    /*
    try {
      const response = await api.post('auth/login', data)
      console.log(response.data)
    } catch(err) {
      alert(err)
    }
    */
  }
  


  function addOption() {
    let option = document.getElementById('options_field').value;
    console.log('option:' ,option)
    setOptions(options => [...options, option])
  }

  function resetOptions() {
      setOptions([])
  }


  return (
      <form name="question" onSubmit={handleQuestion}>
          <div className="form-group">
              <p>Pergunta</p>
              <input type="text" name="question" onChange={e => setQuestion(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Categoria</p>
              <input type="text" name="category" onChange={e => setCategory(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Opções</p>
              <input type="text" name="option" id="options_field"/>
              <button type="button" className="optionsBtn" onClick={addOption}><MdAddCircle className="optionBtn-icon"/></button>
              <button type="button" className="optionsBtn" onClick={resetOptions}><MdDelete className="optionBtn-icon"/></button>
          </div>
          <div className="question_options">
              {options.map((option, i) =>
                <span className="option" key={i}>{ option }</span>
              )}
          </div>
          <div className="form-group">
              <p>Resposta</p>
              <input type="text" name="answer" onChange={e => setAnswer(e.target.value)}/>
          </div> 
          <button type="submit">Criar</button>
      </form> 
  );
}
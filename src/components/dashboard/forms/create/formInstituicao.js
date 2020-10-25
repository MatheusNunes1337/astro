import React, { useState } from 'react'
import '../../../../assets/css/dashboard.css';

//api
import api from '../../../../services/api'


export default function Instituicao(props) {

  let [name, setName] = useState('')
   let [city, setCity] = useState('')
   let [state, setState] = useState('')
   let [responsavel, setResponsavel] = useState('')
   let [email_resp, setEmail] = useState('')

  async function handleSchool(e) {
    e.preventDefault()

    const data = {
      name,
      city,
      state,
      responsavel,
      email_resp
    }
    
    api.post('school/', data)
   .then(response => {
        alert(response.data.message)
    })
    .catch(err => {
        console.error(err)
    })
  }
	

  return (
      <form name="Instituicao" onSubmit={handleSchool}>
          <div className="form-group">
              <p>Nome</p>
              <input type="text" name="name" onChange={e => setName(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Cidade</p>
              <input type="text" name="city" onChange={e => setCity(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Estado</p>
              <input type="text" name="state" onChange={e => setState(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Responsavel</p>
              <input type="text" name="responsavel" onChange={e => setResponsavel(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>E-mail do responsavel</p>
              <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Criar</button>
      </form>
  );
}
import React, {useState, useEffect} from 'react';

import '../../../assets/css/global.css'
import '../../../assets/css/client.css'

import { useHistory } from 'react-router-dom'
import { BsBoxArrowInLeft } from "react-icons/bs";

import api from '../../../services/api'


export default function StudentsResult() {
  let [students, setStudents] = useState('')

  const token = localStorage.getItem("iToken")
  let history = useHistory();

  useEffect(() => {
      async function getStudents() {
          try {
            const response =  await api.get('student/findBySchool', {
              headers: { Authorization: `Bearer ${token}` }
            })
            setStudents(response.data)
          } catch(err) {
             alert(err)
          }
      }  
      getStudents()
   }, [token])

  function logout() {
    localStorage.removeItem('iToken')
    history.push('/quiz/home')
  }

	
  if(students !== '') {
      return (
      	<div className="students-result-bg">
            <button onClick={logout}><BsBoxArrowInLeft className="logout-icon" />Sair</button>
            <div className="table-wrap"> 
              <table>
                  <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Acertos</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                         students.map((student, i) => 
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{student.name}</td>
                              <td>{student.age}</td>
                              <td>{student.acertos.length}</td>
                            </tr>
                        )
                      }
                  </tbody>
              </table>
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
import React, {useState} from 'react';
import download from 'downloadjs'

import { Link } from 'react-router-dom'
import { FaBars, FaDownload } from 'react-icons/fa'
import { RiQuestionnaireFill } from "react-icons/ri"


import '../assets/css/global.css'
import '../assets/css/client.css'

import api from '../services/api'


export default function Header() {
  let [hiddenMenu, setVisibility] = useState(true)

  async function downloadMaterial() {
     try {
         const response = await api.get('book/download', {
            responseType: 'blob',
                headers: {
                    'Content-Type': 'application/pdf',
                }
         }) 
        download(response.data, 'apostila.pdf')  
     } catch(err) {
       alert(err)
     }
  }

  function dropdown() {
  	if(hiddenMenu) {
  		setVisibility(false)
  	} else {
  		setVisibility(true)
  	}
  }

  return (
    <header>
  	    <Link to="/home"><span className="logo">
          	Astro
        </span></Link>
        <button className="dropdown_btn" onClick={dropdown}><FaBars className="icon"/></button>
        <div className="menu_buttons">
        	<Link to="/quiz/home"><button className="quiz-btn">Quiz</button></Link>
        	<button className="material-btn" onClick={downloadMaterial}>Material</button>
        </div>
        {!hiddenMenu ? 
        	(
              <ul id="menu_dropdown">
        		<li><Link to="/quiz/home"><span><RiQuestionnaireFill className="icon"/>Quiz</span></Link></li>
        		<li><Link><span onClick={downloadMaterial}><FaDownload className="icon"/>Material</span></Link></li>
        	  </ul>
            ) : ''
    	}
	 </header>
  );
}
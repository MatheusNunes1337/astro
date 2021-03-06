import React, {useState} from 'react';

import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { FaBars, FaDownload } from 'react-icons/fa'
//import { RiQuestionnaireFill } from "react-icons/ri"


import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Header() {
  let [hiddenMenu, setVisibility] = useState(true)

  const history = useHistory()

  async function goToDownloadPage() {
      history.push('download-material')
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
          <Link to="/solar-system"><button className="ver_planetas-btn">Ver planetas</button></Link>
          <Link to="/sobre"><button className="ver_planetas-btn">Sobre</button></Link>
          <Link to="/quiz/home"><button className="quiz-btn">Quiz</button></Link>
          <button className="material-btn" onClick={goToDownloadPage}>Material</button>
        </div>
        {!hiddenMenu ? 
        	(
              <ul id="menu_dropdown">
                <li><Link to="/sobre">Sobre</Link></li>
        		    <li><Link to="/quiz/home">Quiz</Link></li>
        		    <button onClick={goToDownloadPage} className="material-btn"><FaDownload className="icon"/>Material</button>
        	    </ul>
            ) : ''
    	}
	 </header>
  );
}
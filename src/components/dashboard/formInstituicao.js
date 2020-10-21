import React, { useState } from 'react'
import '../../assets/css/dashboard.css';

//api
import api from '../../services/api'


export default function Instituicao() {
	

  return (
      <form name="Instituicao">
          <div className="form-group">
              <p>Nome</p>
              <input type="text" name="nome"/>
          </div>
          <div className="form-group">
              <p>Cidade</p>
              <input type="text" name="cidade"/>
          </div>
          <div className="form-group">
              <p>Estado</p>
              <input type="text" name="estado"/>
          </div>
          <div className="form-group">
              <p>Responsavel</p>
              <input type="text" name="responsavel"/>
          </div>
          <div className="form-group">
              <p>E-mail do responsavel</p>
              <input type="email" name="email_resp"/>
          </div>
          <button type="submit">Criar</button>
      </form>
  );
}
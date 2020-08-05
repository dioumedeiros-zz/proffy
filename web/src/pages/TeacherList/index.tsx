import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backImg from '../../assets/images/icons/back.svg';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacger-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backImg} alt="Ícone de voltar" />
          </Link>
          <img src={logoImg} alt="Logo Proffy" />
        </div>

        <div className="header-content">
          <strong>Estest são os proffys disponíveis.</strong>
        </div>
      </header>
    </div>
  );
};

export default TeacherList;

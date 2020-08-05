import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backImg from '../../assets/images/icons/back.svg';

import './styles.css';

type HeaderProps = {
  title: string;
};

const PageHeader: React.FC<HeaderProps> = ({ children, title }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backImg} alt="Ícone de voltar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;

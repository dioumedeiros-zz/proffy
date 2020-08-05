import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/37094028?s=460&u=2046f770f89428370dc5cda95173aa3f088c9e73&v=4"
          alt="Diou Medeiros"
        />
        <div>
          <strong>Diou Medeiros</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta afim de muitas coisa. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam sunt similique ab explicabo, atque hic
        beatae rerum error libero quidem voluptas accusamus ratione quia dolorem
        nemo. Odio fuga est ipsum?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Logo do whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

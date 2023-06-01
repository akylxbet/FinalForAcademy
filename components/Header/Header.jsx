import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.logo}>
        <img src="/logo.png" alt="img" />
        <h1>BozuyKG</h1>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <a href="#">Проекты</a>
          </li>
          <li>
            <a href="#">Районы</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
        <div className={s.lang}>
            <button>eng</button>
        </div> 
        <div className={s.auth}>
            <button>Регистрация</button>
        </div>
    </div>
  );
};

export default Header;

import React from "react";
import s from "./Header.module.scss";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import Link from "next/link";
const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.logo}>
        <img src="/bozuy.png" alt="img" />
        
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href="/catalog">Проекты</Link>
          </li>
          <li>
            <Link href="/rayons">Районы</Link>
          </li>
          <li>
            <Link href="#">Блог</Link>
          </li>
          <li>
            <Link href="#">Контакты</Link>
          </li>
        </ul>
      </nav>

      <button className={s.myButt}>eng</button>
      <AnimatedButton
        background="#ffc95e"
        hoverBackground="#FFFF"
        type="primary"
      >
        Регистрация
      </AnimatedButton>
    </div>
  );
};

export default Header;

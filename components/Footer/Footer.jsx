import Link from "next/link";
import React from "react";
import s from './Footer.module.scss'
import Links from "../Links/Links";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.contacts}>
        <div className={s.adress}>Ибраимова 115/1</div>
      </div>
      <div className={s.social}>
        <a href="#"><img src="/whatsapp.svg" alt="img" /></a>
        <a href="#"><img src="/telegram.svg" alt="img" /></a>
        <a href="#"><img src="/instagram.svg" alt="img" /></a>
      </div>
      <div className={s.blocks}>
        <Link href="/disctrict">
            Районы
        </Link>
        <Link href="/register">
            Хотите Зарегистрироваться?
        </Link>
        <Link href="/abouUs">
            Подробнее о нас!
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

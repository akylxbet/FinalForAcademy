import React from "react";
import s from "./Kyrgyzstan.module.scss";
import Paragraph from "../Paragraph/Paragraph";
const Kyzrgyzstan = () => {
  return (
    <section className={s.Kyzrgyzstan}>
      <div className={s.left_block}>
        <h4>Почему стоит выбрать</h4>
        <h2>ДУБАЙ ДЛЯ ЖИЗНИ <br/> И ИНВЕСТИЦИЙ</h2>
        <div className={s.passport_block}>
          <img src="./andrew.png" alt="" />
          Получение ВНЖ Дубая <br />
          при покупке недвижимости от 205 000$
        </div>
      </div>
      <div className={s.right_block}>
        <Paragraph>Входит в топ-5 самых посещаемых городов мира - ваш объект будет максимально востребован у арендаторов</Paragraph>
        <Paragraph>Лучшее место в мире для жизни экспатов согласно Expat Essential Index 2022 - соотношение ежегодного прироста населения к объемам строительства 3 к 1, что стимулирует рост стоимости недвижимости.</Paragraph>
        <Paragraph>ОАЭ занимают 1-е место в мире по безопасности - <br /> вашей семье и инвестициям и ничего не угрожает.</Paragraph>
        <Paragraph>Стабильный курс валюты и нейтральная внешняя <br /> политика.</Paragraph>
      </div>
    </section>
  );
};

export default Kyzrgyzstan;

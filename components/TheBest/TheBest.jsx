import React from "react";
import s from "./TheBest.module.scss";
import CardsOfTheBest from "../CardsOfTheBest/CardsOfTheBest";
const TheBest = () => {
  return (
    <section className={s.TheBest}>
      <div className={s.title}>
        <h2>Мы собрали</h2>
        <h1>лучшие коллекции недвижимости под ваши цели</h1>
        <p>
          Просто выберите интересующую категорию, и мы сразу отправим вам
          готовую подборку проектов
        </p>
      </div>
      <div className={s.cards}>
      <CardsOfTheBest />
      </div>
      
    </section>
  );
};

export default TheBest;

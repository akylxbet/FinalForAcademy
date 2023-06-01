import React from "react";
import s from "./CardsOfTheBest.module.scss";
import Button from "../Button/Button";
const CardsOfTheBest = () => {
  return (
    <div className={s.CardsOfTheBest}>
      <img className={s.card_img}src="./Villas.png" alt="" />
      <div className={s.title}>
        <h3>Виллы и Таунхаусы</h3>
        <div className={s.projects}>
          <img src="./Hose.svg" alt="" />
          <p>49 проектов</p>
        </div>
        <div className={s.prices}>
          <img src="./Price.svg" alt="" />
          <p>от 125 000$ до 5 000 000$</p>
        </div>
        <div className={s.buttonz}>
        <Button>Узнать</Button>
        </div>
       
      </div>
    </div>
  );
};

export default CardsOfTheBest;

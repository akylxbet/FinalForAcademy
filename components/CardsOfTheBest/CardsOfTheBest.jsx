import React from "react";
import s from "./CardsOfTheBest.module.scss";
import Button from "../UI/Button/Button";
const CardsOfTheBest = ({name, img, price, projects, id}) => {
  return (
    <div className={s.CardsOfTheBest}>
      <img className={s.card_img}src={img} alt="" />
      <div className={s.title}>
        <h3>{name}</h3>
        <div className={s.projects}>
          <img src="./Hose.svg" alt="" />
          <p>{projects} проектов</p>
        </div>
        <div className={s.prices}>
          <img src="./Price.svg" alt="" />
          <p>{price}</p>
        </div>
        <div className={s.buttonz}>
        <Button>Узнать</Button>
        </div>
       
      </div>
    </div>
  );
};

export default CardsOfTheBest;

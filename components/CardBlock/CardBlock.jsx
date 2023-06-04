import React from "react";
import Header from "../Header/Header";
import s from "./CardBlock.module.scss";
import CardBlockCard from "./CardBlockCard/CardBlockCard";
import { card } from "@/constants/card";
const CardBlock = () => {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.card_logo}>
            <h1>Все проекты</h1>
          </div>
          <div className={s.card_header}>
            <div className={s.card_header_family}>
              <img src="/semya.svg" alt="family" />
              <p>Семейные комплексы</p>
            </div>
            <div className={s.card_header_mony}>
              <img src="/mony.svg" alt="mony" />
              <p>Для инвестирования</p>
            </div>
            <div className={s.card_header_vila}>
              <img src="/villa.svg" alt="villa" />
              <p>Виллы и таунхаусы</p>
            </div>
            <div className={s.card_header_arend}>
              <img src="/arend.svg" alt="arend" />
              <p>Для сдачи в аренду</p>
            </div>
            <div className={s.card_header_ultra}>
              <img src="/ultra.svg" alt="ultra" />
              <p>Ультра-люкс</p>
            </div>
          </div>
          {card.map((item) => {
            return (
              <CardBlockCard
                id={item.id}
                img={item.img}
                name={item.name}
                date={item.date}
                term={item.term}
                dom={item.dom}
                domtitle={item.domtitle}
                kvadrat={item.kvadrat}
                kvadrattitle={item.kvadrattitle}
                group={item.group}
                grouptitle={item.grouptitle}
                map={item.map}
                maptitle={item.maptitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;

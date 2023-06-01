import React, { useEffect, useState } from "react";
import s from "./Main.module.scss";
const Main = () => {

  return (
    <section className={s.Main}>
      <div className={s.title}>
        <div className={s.upper_title}>
          <img src="/LittileCity.png" alt="png" />
          <h2>ПОМОГАЕМ ПРИОБРЕСТИ</h2>
          <h1>НЕДВИЖИМОСТЬ</h1>
          <div className={s.text_button}>
            <h1>В КР</h1>
            <button>Подобрать</button>
          </div>
        </div>
        <div className={s.bottom_title}>
          <img src="/BigCity.png" alt="" />
          <p className={s.garantie}>
            Гарантированный премиальный <br /> сервис и безопасность сделки
          </p>
        </div>
      </div>
      <div className={s.house}>
        <img src="./house.png" alt="img" />
      </div>
    </section>
  );
};

export default Main;

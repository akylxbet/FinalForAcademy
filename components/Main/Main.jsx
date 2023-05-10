import React from "react";
import s from "./Main.module.scss";
const Main = () => {
  return (
    <section className={s.Main}>
      <div className={s.title}>
        <div className={s.upper_title}>
          <img src="/LittileCity.png" alt="png" />
          <h2>ПОМОГАЕМ ПРИОБРЕСТИ</h2>
          <h1>
            НЕДВИЖИМОСТЬ
          </h1>
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
          <div className={s.info_of_man}>
          <p>Основатель агентства <br />
           недвижимости </p>
          <h4>Алексей Строев</h4>
          </div>
        </div>
      </div>
      <img className={s.man} src="/Man.png" alt="" />
    </section>
  );
};

export default Main;

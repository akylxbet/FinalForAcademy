import React from "react";
import s from "./Individual.module.scss";
import Paragraph from "../UI/Paragraph/Paragraph";
import AnotherButton from "../UI/AnotherButton/AnotherButton";

const Individual = () => {
  return (
    <section className={s.Individual}>
      <div className={s.container}>
        <div className={s.title}>
          <h4>ПОЛУЧИТЕ ИНДИВИДУАЛЬНУЮ</h4>
          <h2>ПОДБОРКУ НЕДВИЖИМОСТИ</h2>
          <p className={s.questions}
          >
            Ответьте всего на 5 вопросов и получите качественную подборку
            недвижимости от наших экспертов!
          </p>
          <Paragraph>
          Займет всего 1 минуту
          </Paragraph>
          <AnotherButton>
            Начать
          </AnotherButton>
        </div>
        <img className={s.magazine} src="/magazine.png" alt="" />
      </div>
    </section>
  );
};

export default Individual;

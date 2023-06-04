import React, {useState, useEffect} from "react";
import s from "./TheBest.module.scss";
import CardsOfTheBest from "../CardsOfTheBest/CardsOfTheBest";
import axios from "axios";
const TheBest = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/card');
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }

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
      {data.map((item) => {
        return (
          <CardsOfTheBest
          key={item.id}
          name={item.name}
          img={item.img}
          price={item.cost}
          projects={item.projects}
        />
        );
      })}
      </div>
      
     
    </section>
  );
};

export default TheBest;

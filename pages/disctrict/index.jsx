import React, { useEffect, useState } from "react";
import s from "./Disctrict.module.scss";
import AnimCard from "../../components/AnimCard/AnimCard";
import axios from "axios";
import AnimatedCards from "../../components/AnimatedCard/AnimatedCard";
import { motion } from "framer-motion";

const Disctrict = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:4000/dicstrict");
      const data = response.data;
      setData(data);
      console.log(response);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  return (
    <section className={s.Disctrict}>
    <div className={s.title}>
    <h1>Районы</h1>
    </div>
    <motion.div 
     initial={{ x: 1000 }}
     animate={{ x: 0 }}
     transition={{ duration: 0.4 }}
    className={s.cards}>
      {data.map((item) => {
        return (
          <div className={s.card}>
            <AnimCard id={item.id} name={item.name} />
          </div>
        );
      })}
    </motion.div>
  </section>
  );
};

export default Disctrict;

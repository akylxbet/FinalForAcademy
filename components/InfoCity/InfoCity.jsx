import React, { useEffect, useState } from "react";
import s from "./InfoCity.module.scss";
import Image from "next/image";
import CityTransport from "../CityTransport/CityTransport";
import axios from "axios";
import { useRouter } from "next/router";
const InfoCity = ({name}) => {

  const {query} = useRouter()
  const [data, setData] = useState([]);

  console.log(data);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:4000/dicstrict`);

      if (!!query.id) {
        const teacher = response.data.find(
          ({ id }) => id === +query.id
        );

        setData(teacher);
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.info}>
          <img src={data.bigImg} alt="CityInfo" />
          <h1>{data.name}</h1>
          Добро пожаловать в Дубай Марина, жемчужину Дубая и одно из самых
          популярных мест в мире. Дубай Марина — оживленное прибрежное
          сообщество, в котором каждый найдет что-то для себя. Это идеальное
          место для жизни, работы и отдыха.
          <br />
          <br />
          Этот оживленный оазис предлагает множество роскошных апартаментов и
          вилл, а также отели мирового класса, удобно расположенные вдоль
          набережной. Если вы хотите расслабиться на солнце или насладиться
          одной из лучших кухонь мира, в Dubai Marina каждый найдет что-то для
          себя.
          <br />
          <br />
          В этом районе также находятся некоторые из самых знаковых
          достопримечательностей мира, такие как яхт-клуб Дубай Марина и
          торговый центр Дубай Марина. В торговом центре есть все, от бутиков до
          пятизвездочных ресторанов.
          <br />
          <br />
          Для тех, кто ищет активный образ жизни, есть множество водных видов
          спорта и развлечений, включая парусный спорт, каякинг и греблю на
          байдарках. Кроме того, в этом районе полно развлекательных заведений,
          от кинотеатров до ночных клубов, вам никогда не будет скучно.
          <br />
          <br />
          Но настоящая жемчужина Дубай Марины — потрясающие виды. С набережной у
          пристани вы можете полюбоваться красивым Персидским заливом, а также
          знаменитой Пальмой Джумейра.
          <br />
          <br />
          Так зачем покупать квартиру в Дубай Марине? Район предлагает
          уникальное сочетание роскоши и удобства. Это идеальное место для
          жизни, работы и развлечений с множеством аттракционов и удобств,
          которые помогут вам развлечься. Кроме того, этот район находится
          недалеко от одних из лучших в мире пляжей, что делает его идеальным
          местом для отдыха на выходных.
          <br />
          <br />
          Неудивительно, что с его потрясающими видами, удобствами мирового
          класса и непревзойденным расположением Дубай Марина является одним из
          самых популярных мест в мире. Независимо от того, ищете ли вы место,
          которое можно назвать домом, или место для инвестиций, Дубай Марина —
          идеальное место для вас. Так что не ждите больше, приезжайте в Дубай
          Марина и наслаждайтесь хорошей жизнью!
          <button>ПОЛУЧИТЬ КАТОЛОГ ВСЕХ ОБЪЕКТОВ В Dubai Marina </button>
        </div>
        <CityTransport />
      </div>
    </div>
  );
};

export default InfoCity;

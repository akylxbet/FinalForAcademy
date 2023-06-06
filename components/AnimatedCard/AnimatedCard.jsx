import { useState } from "react";
import s from "./AnimatedCard.module.scss";
import city from "../../public/City.png";
import Image from "next/image";
import Link from "next/link";
import { card } from "@/constants/card";
import Button from "../UI/Button/Button";
const AnimatedCards = ({name}) => {
//   const [cards, setCard] = useState([
//     {
//       id: 1,
//       img: city,
//       name: "Downtown",
//     },
//     {
//       id: 2,
//       img: city,
//       name: "Dubai Marina",
//     },
//     {
//       id: 3,
//       img: city,
//       name: "Palm Jumeirah",
//     },
//     {
//       id: 4,
//       img: city,
//       name: "MBR CITY  Meydan",
//     },
//     {
//       id: 5,
//       img: city,
//       name: "Creek Harbour",
//     },
//     {
//       id: 6,
//       img: city,
//       name: "Business Bay ",
//     },
//     {
//       id: 7,
//       img: city,
//       name: "DUBAI Hills Estate ",
//     },
//     {
//       id: 8,
//       img: city,
//       name: "JUMEIRAH  VILLAGE CIRCLE",
//     },
//   ]);


  return (
    <div className={s.tiles}>
          <div className={s.tile} key={card.id}>
            <div className={s.card}>
              <img src="/City.png" alt="img" />
              <div className={`${s.side} ${s.front}`}>
                <h1>{name}</h1>
              </div>
              <div className={`${s.side} ${s.back}`}>
                <div className={s.bio}>
                  <h1>{name}</h1>
                  <p>
                    Camille Preaker, an emotional (and physically) scarred
                    reporter for the (fictional) St. Louis Chronicle, who
                    escaped her hometown of Wind Gap MO after a difficult
                    childhood.
                  </p>
                  <div className={s.btn}> 
                  <Button>
                   Узнать
                   </Button>
                   </div>
                 
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default AnimatedCards;

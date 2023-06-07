import s from "./AnimatedCard.module.scss";
import React from "react";
import Button from "../UI/Button/Button";
import { useRouter } from "next/router";
import Link from "next/link";
const AnimatedCard = ({ name, id, img }) => {
  const router = useRouter();
  return (
    <div className={s.tile}>
      <div className={s.card}>
        <img src={img} alt="img" />
        <div className={`${s.side} ${s.front}`}>
          <h1>{name}</h1>
        </div>
        <div className={`${s.side} ${s.back}`}>
          <div className={s.bio}>
            <h1>{name}</h1>
            <p>
              Camille Preaker, an emotional (and physically) scarred reporter
              for the (fictional) St. Louis Chronicle, who escaped her hometown
              of Wind Gap MO after a difficult childhood.
            </p>
            <div className={s.btn}>
              <Link href={`/cityinfo/${id}`}>
                <Button onClick={() => router.push(`/cityinfo/${id}`)}>
                  Узнать
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;

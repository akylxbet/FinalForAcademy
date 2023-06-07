import React from "react";
import s from "./CardBlockCard.module.scss";
const CardBlockCard = ({img, name, price ,term,dom,type,kvadrat,kvadrattitle,group,grouptitle,map,maptitle}) => {
  return (
        <div className={s.card_cartochki}>
          <div className={s.card_cartochki_card}>
            <img src={img} alt="vial" />
            <div className={s.card_cartochki_card_desc}>
              <h1>{name}</h1>
              <p>{price}$</p>
            </div>
            <div className={s.card_cartochki_card_title}>
              <p>{term}</p>
            </div>
            <div className={s.card_cartochki_card_photo}>
              <div className={s.card_cartochki_card_photo_vila}>
                <img src={dom} alt="dom" />
                <p>{type}</p>
              </div>
              <div className={s.card_cartochki_card_photo_kvadrat}>
                <img src={kvadrat} alt="kvadrat" />
                <p>{kvadrattitle}</p>
              </div>
              <div className={s.card_cartochki_card_photo_group}>
                <img src={group} alt="group" />
                <p>{grouptitle}</p>
              </div>
              <div className={s.card_cartochki_card_photo_map}>
                <img src={map} alt="map" />
                <p>{maptitle}</p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default CardBlockCard;

import React, { useState } from 'react';
import s from './City.module.scss';
import city from '../../public/City.png';
import Image from 'next/image';

const City = () => {
    const [cards, setCard] = useState(
        [
            {
                id: 1,
                img: city,
                name: 'Downtown',
            },
            {
                id: 2,
                img: city,
                name: 'Dubai Marina',
            },
            {
                id: 3,
                img: city,
                name: 'Palm Jumeirah',
            },
            {
                id: 4,
                img: city,
                name: 'MBR CITY  Meydan',
            },
            {
                id: 5,
                img: city,
                name: 'Creek Harbour',
            },
            {
                id: 6,
                img: city,
                name: 'Business Bay ',
            },
            {
                id: 7,
                img: city,
                name: 'DUBAI Hills Estate ',
            },
            {
                id: 8,
                img: city,
                name: "JUMEIRAH  VILLAGE CIRCLE",
            },
        ]);

    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1>Районы</h1>
                <div className={s.cards}>
                    {cards.map((card) => (
                        <div className={s.card} key={card.id}>
                            <Image src={card.img} alt="city" />
                            <h2>{card.name}</h2>
                            <button>УЗНАТЬ БОЛЬШЕ</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default City;

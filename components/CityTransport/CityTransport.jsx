import Image from 'next/image';
import React from 'react';
import s from './CityTransport.module.scss'
import transport from '../../public/transport.png'

const CityTransport = () => {

    const transCards = [
        {
            id:1,
            img: transport,
            time: '13 МИНУТ',
            name: 'SHEIKH ZAYED ROAD',
        },
        {
            id:2,
            img: transport,
            time: '30 МИНУТ ',
            name: 'BURJ AL ARAB',
        },
        {
            id:3,
            img: transport,
            time: '1 МИНУТ',
            name: 'DUBAI MALL',
        },
        {
            id:4,
            img: transport,
            time: '40 МИНУТ',
            name: 'THE PALM JUMEIRAH',
        },
        {
            id:5,
            img: transport,
            time: '35 МИНУТ',
            name: 'AIN DUBAI',
        },
        {
            id:6,
            img: transport,
            time: '18 МИНУТ',
            name: 'DUBAI AIRPORT (DXB)',
        },
    ]

    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1>Транспортная доступность</h1>
                <div className={s.cards}>
                    {
                        transCards.map((transCard) => (
                            <div className={s.card}>
                                <Image src={transCard.img} alt="transport" />
                                <div className={s.title}>
                                    <h3>{transCard.time}</h3>
                                    <h2>{transCard.name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CityTransport;
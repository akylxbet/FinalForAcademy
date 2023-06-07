import React from 'react';
import s from './details.module.scss'

const details = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <img src="/City.png" alt="city" />
                <h3>Downtown</h3>
                <div className={s.titles}>
                    <div className={s.title}>
                        <h1>  Окончание постройки</h1>
                        <h2>I квартал 2021</h2>
                    </div>
                    <div className={s.title}>
                        <h1> Цена, м2	</h1>
                        <h2>От 650$  </h2>
                    </div>
                    <div className={s.title}>
                        <h1>Дистанционная покупка	</h1>
                        <h2> Подробнее...</h2>
                    </div>
                    <div className={s.title}>
                        <h1>Тип дома	</h1>
                        <h2>Жилой дом</h2>
                    </div>
                    <div className={s.title}>
                        <h1>  Площадь	</h1>
                        <h2>от 47,00 м2</h2>
                    </div>
                    <div className={s.title}>
                        <h1>Этажей	</h1>
                        <h2>12</h2>
                    </div>
                    <div className={s.title}>
                        <h1>Квартир	</h1>
                        <h2>160</h2>
                    </div>
                    <div className={s.title}>
                        <h1>Состояние	</h1>
                        <h2>Черный каркас</h2>
                    </div>
                    <div className={s.title}>
                        <h1>Высота потолка</h1>
                        <h2>3,00 м.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default details;
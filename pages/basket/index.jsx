import React, {useEffect, useState} from 'react';
import s from '../basket/Cart.module.scss';
// import CartCard from '@/components/CartCard/CartCard';
// import ProductCard from '@/components/ProductCard/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from '@/redux/reducers/basket';
import {Spinner} from "@chakra-ui/react";
import CardBlockCard from '@/components/CardBlockCard/CardBlockCard';

const Index = () => {

    const dispatch = useDispatch();
    const { basket, error, loading } = useSelector(state => state.basket);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch(getBasket(user?.id));
    }, []);

    const { products } = useSelector(state => state.products)

    const totalPrice = basket.reduce((accumulator, item) => accumulator + item.price, 0);
    const totalCount = basket.reduce((accumulator, item) => accumulator + item.count, 0);

    return (
        <section className='container'>
            <div className={s.card_section}>
                <h6>Главная / Корзина</h6>
                <div className={s.card_section__header}>
                    <h2>Ваша корзина</h2>
                    <h2>{totalCount} предмета</h2>
                </div>
                <div className={s.card_section__block}>
                    {loading ? (
                        <Spinner
                            mt={5}
                            thickness='7px'
                            speed='0.5s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    ) : null}
                    {error ? <span className="span">Отсутствует подключение к интернету...</span> : null}
                    {basket.length !== 0 ? (
                        basket.map(item => (
                            <CartCard key={item.id} item={item} />
                        ))
                    ) : (
                        <h6>Нет товаров в корзине</h6>
                    )}
                </div>
                <div className={s.card_section__order}>
                    <p>Итоговая стоимость: <span>{totalPrice}₽</span></p>
                    <button className={s.card_section__order__btn}>Оформить заказ</button>
                </div>
                <div className={s.card_section__products}>
                    <h1>Вам может понравиться</h1>
                    <div className={s.card_section__products__block}>
                        {products.map((product) => (
                            <CardBlockCard
                            id={product.id}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            term={product.term}
                            dom={product.dom}
                            domtitle={product.domtitle}
                            kvadrat={product.kvadrat}
                            kvadrattitle={product.kvadrattitle}
                            group={product.group}
                            grouptitle={product.grouptitle}
                            map={product.map}
                            maptitle={product.maptitle}
                          />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Index;
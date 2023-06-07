import f from './Favorites.module.scss'
import Links from "@/components/Links/Links";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFavorites} from "@/redux/reducers/favorites";
import {Spinner} from "@chakra-ui/react";
import CardBlockCard from '../CardBlockCard/CardBlockCard';
import products from '@/redux/reducers/products';


const Favorites = () => {
    const [state, setState] = useState([])
    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    const dispatch = useDispatch()

    const {favorites, loading, error } = useSelector(state => state.favorites)
    
    const {products} = useSelector(state=> state.products)

    useEffect(() => {
        dispatch(getFavorites(item?.id))
    },[state])


    return(
        <section className={f.fav}>
            <div className="container">
                <Links/>
                <p className={f.fav__subtitle}>
                    Избранное
                </p>
                <div className={f.fav__content}>
                    {
                        loading?
                            <Spinner
                                mt={5}
                                thickness='7px'
                                speed='0.5s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            /> : ''
                    }
                    {
                        error ? <span className="span">Отсутвует подключения к интернету...</span> : ''
                    }
                    {
                        favorites.length !== 0 ?
                            products.map(item => (
                                <CardBlockCard
                                product={product}
                                key={product.id}
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
                            )) : <h1 className="not">Нет товаров в избранное</h1>
                    }
                </div>
            </div>
        </section>
    )
}

export default Favorites
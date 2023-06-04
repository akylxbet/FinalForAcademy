import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import s from "./CardBlock.module.scss";
import axios from "axios";
import CardBlockCard from "../../components/CardBlockCard/CardBlockCard";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
const CardBlock = ({}) => {
  const [data, setData] = useState([]);

  // const dispatch = useDispatch();
  // const { setData } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([data]);
  const [priceRange, setPriceRange] = useState([0, 300990]);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handlePriceChange = (value) => {
    const filtered = data.filter(
      (data) =>
        parseInt(data.price) >= value[0] && parseInt(data.price) <= value[1]
    );

    // Сортировка отфильтрованных продуктов
    const sortedProducts = sortProducts(filtered, sortOrder);
    setFilteredProducts(sortedProducts);
    setPriceRange(value);
  };

  const sortProducts = (data, sortOrder) => {
    const sorted = [...data];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
    return sorted;
  };

  const handleSortChange = (value) => {
    if (value === "all") {
      setFilteredProducts(data); // Show all products
    } else if (value === "desc") {
      const sortedProducts = sortProducts(filteredProducts, "desc");
      setFilteredProducts(sortedProducts); // Sort by descending price
    } else if (value === "asc") {
      const sortedProducts = sortProducts(filteredProducts, "asc");
      setFilteredProducts(sortedProducts); // Sort by ascending price
    }
  };

  useEffect(() => {
    const prices = data.map((product) => parseInt(product.price));
    const maxPrice = Math.max(...prices);

    setPriceRange([0, maxPrice]);
    handlePriceChange([0, maxPrice]);
  }, [data]);

  const maxPrice = data.reduce((max, product) => {
    const price = data.price;
    return price > max ? price : max;
  }, 0);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}$`;
  };

  const items = [
    {
      key: "1",
      label: <p>по убыванию цены</p>,
    },
    {
      key: "2",
      label: <p>по возрастанию цены</p>,
    },
    {
      key: "3",
      label: <p>по популярности</p>,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios("http://localhost:4000/beleks");
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  console.log(data);

  return (
    <section className={s.CardBlock}>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.card_logo}>
            <h1>Все проекты</h1>
          </div>
          <div className={s.card_header}>
            <div className={s.card_header_family}>
              <img src="/semya.svg" alt="family" />
              <p>Семейные комплексы</p>
            </div>
            <div className={s.card_header_mony}>
              <img src="/mony.svg" alt="mony" />
              <p>Для инвестирования</p>
            </div>
            <div className={s.card_header_vila}>
              <img src="/villa.svg" alt="villa" />
              <p>Виллы и таунхаусы</p>
            </div>
            <div className={s.card_header_arend}>
              <img src="/arend.svg" alt="arend" />
              <p>Для сдачи в аренду</p>
            </div>
            <div className={s.card_header_ultra}>
              <img src="/ultra.svg" alt="ultra" />
              <p>Ультра-люкс</p>
            </div>
          </div>
          <div className={s.card_card}>
            {data.map((item) => {
              return (
                <CardBlockCard
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  term={item.term}
                  dom={item.dom}
                  domtitle={item.domtitle}
                  kvadrat={item.kvadrat}
                  kvadrattitle={item.kvadrattitle}
                  group={item.group}
                  grouptitle={item.grouptitle}
                  map={item.map}
                  maptitle={item.maptitle}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CardBlock;

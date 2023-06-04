import React, { useState, useEffect } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import { Button, Dropdown, Modal, Select } from "antd";
// import { products } from "@/contants/Products";
import { useDispatch, useSelector } from "react-redux";
import CardBlockCard from "@/components/CardBlockCard/CardBlockCard";
import axios from "axios";

const Catalog = () => {
  useEffect(() => {
   
     const akyl = async () => {
      await axios
        .get("http://localhost:4000/beleks")
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    akyl()
  }, []);

  const [data, setData] = useState([]);

  console.log(data);

  const dispatch = useDispatch();
  const { setDatt } = useSelector((state) => state.products);
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

  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          maxPrice={maxPrice}
          setPriceRange={setPriceRange}
          formatPrice={formatPrice}
        />
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>
          <button className={s.filter_button} onClick={() => setOpen(true)}>
            Фильтр
          </button>
          <Modal
            padding="10px"
            footer={false}
            centered
            open={open}
            closable={true}
            onCancel={() => setOpen(false)}
            width={600}
            className="modalStyle"
          >
            <FilterOfCatalog
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              maxPrice={maxPrice}
              setPriceRange={setPriceRange}
              formatPrice={formatPrice}
            />
          </Modal>
          <div className={s.right_side_of_sort}>
            <Select
              placeholder="Сортировать"
              menu={{
                items,
              }}
              defaultValue="all"
              options={[
                {
                  value: "all",
                  label: "показать все",
                },
                {
                  value: "desc",
                  label: "по убыванию цены",
                },
                {
                  value: "asc",
                  label: "по возрастанию цены",
                },
              ]}
              placement="bottomRight"
              onChange={handleSortChange}
            >
              <Button>
                <img src="/sortimg.png" alt="sort" />
              </Button>
            </Select>
          </div>
        </div>
        <div className={s.Cards}>
          {filteredProducts.length === 0 ? (
            <div className={s.noProducts}>
              <h1>Не найдено товаров по данной цене!</h1>
            </div>
          ) : (
            filteredProducts.map((data) => (
              <CardBlockCard
                id={data.id}
                img={data.img}
                name={data.name}
                price={data.price}
                term={data.term}
                dom={data.dom}
                domtitle={data.domtitle}
                kvadrat={data.kvadrat}
                kvadrattitle={data.kvadrattitle}
                group={data.group}
                grouptitle={data.grouptitle}
                map={data.map}
                maptitle={data.maptitle}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

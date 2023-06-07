import React, { useState } from "react";
import { Slider, Checkbox, Select } from "antd";
import s from "./FilterOfCatalog.module.scss";
import Selection from "../UI/Selection/Selection";
import Checkboxes from "../Checkbox/Checkboxes";
// import ColorBlocks from "../ColorBlocks/ColorBlocks";
import axios from "axios";
const FilterOfCatalog = ({
  priceRange,
  setPriceRange,
  handlePriceChange,
  maxPrice,
  formatPrice,
  selectedFilter, handleFilterChange
}) => {
  
  // const items = [
  //   {
  //     key: "1",
  //     label: <p>ВЖХ</p>,
  //   },
  //   {
  //     key: "2",
  //     label: <p>Семейный</p>,
  //   },
  //   {
  //     key: "3",
  //     label: <p>Инвестиции</p>,
  //   },
  //   {
  //     key:'4',
  //     label: <p>Виллы</p>
  //   },
  //   {
  //     key:'5',
  //     label: <p>Море</p>
  //   }
  // ];

  const filterOptions = [
    {
      value: "all",
      label: "Все",
    },
    {
      value: "ВЖХ",
      label: "Для получения ВНЖ",
    },
    {
      value: "Семейный",
      label: "Семейные комплексы",
    },
    {
      value: "Инвестиции",
      label: "Проекты для инвестирования",
    },
    {
      value: "Виллы",
      label: "Виллы и таунхаусы",
    },
    {
      value: "Море",
      label: "Проекты у моря",
    },
  ];

  return (
    <div className={s.FilterOfCatalog}>
      <div className={s.Select}>
        <h3>Раздел</h3>
        <Select
          placeholder="Сортировать"
          options={filterOptions}
          value={selectedFilter}
          onChange={handleFilterChange}
          placement="bottomRight"
          // placeholder="Сортировать"
          // menu={{
          //   items,
          // }}
          // defaultValue="Смотреть"
          // options={[
          //   {
          //     value: "ВЖХ",
          //     label: "Для получения ВНЖ",
          //   },
          //   {
          //     value: "Семейный",
          //     label: "Семейные комплексы",
          //   },
          //   {
          //     value: "Инвестиции",
          //     label: "Проекты для инвестирования",
          //   },
          //   {
          //     value: "Виллы",
          //     label: "Виллы и таунхаусы",
          //   },
          //   {
          //     value: "Море",
          //     label: "Проекты у моря",
          //   },
          // ]}
          // placement="bottomRight"
        />
      </div>

      <div className={s.price}>
        <h3>Цена</h3>
        <Slider
          style={{ position: "relative" }}
          range={{ draggableTrack: false }}
          defaultValue={priceRange}
          onChange={handlePriceChange}
          max={maxPrice}
        />
        <div className={s.price_range}>
          <div className={s.price_block}>{formatPrice(priceRange[0])}</div>
          <div className={s.line_between_prices}></div>
          <div className={s.price_block}>{formatPrice(priceRange[1])}</div>
        </div>
      </div>
      {/* <div className={s.color}>
        <h3>Цвет</h3>
        <ColorBlocks />
      </div> */}
      <div className={s.brand}>
        <h3>Бренд</h3>
        <Checkboxes>Динс</Checkboxes>
        <Checkboxes>Кускен</Checkboxes>
        <Checkboxes>Эби</Checkboxes>
        <Checkboxes>Реджио</Checkboxes>
        <Checkboxes>Сайле</Checkboxes>
        <h3 className={s.more}>Посмотреть еще</h3>
      </div>
    </div>
  );
};

export default FilterOfCatalog;

import React from "react";
import s from "./Selection.module.scss";
import { Select, Space } from "antd";
const Selection = ({ children }) => {
  return (
    <div className={s.Selection}>
      <Select
        defaultValue="Гостинные"
        style={{
          width: "100%",
        }}
        allowClear
        options={[
          {
            value: "ВЖХ",
            label: "ВЖХ",
          },
        ]}
      />
    </div>
  );
};

export default Selection;

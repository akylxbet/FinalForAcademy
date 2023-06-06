import InfoCity from "@/components/InfoCity/InfoCity";
import axios from "axios";
import React, { useEffect, useState } from "react";
const CityInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:4000/dicstrict");
      const data = response.data;
      setData(data);
      console.log(response);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  return (
    <>
      <InfoCity />
    </>
  );
};

export default CityInfo;

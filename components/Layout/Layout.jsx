import {useEffect} from "react";

import { useDispatch } from "react-redux";
import { getUser } from "@/redux/reducers/user";
import { getProducts } from "@/redux/reducers/products";
import { getFavorites } from "@/redux/reducers/favorites";
import { getBasket } from "@/redux/reducers/basket";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  let user = {};
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user"));
  }

  useEffect(() => {
    dispatch(getUser(user?.id));
    dispatch(getFavorites(user?.id));
    dispatch(getBasket(user?.id));
    dispatch(getProducts());
  }, []);

  return (
    <>
    <Header/>
    {children}
    </>
  );
};

export default Layout;

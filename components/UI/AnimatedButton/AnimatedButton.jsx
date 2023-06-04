import React, { useRef } from "react";
import s from "./AnimatedButton.module.scss";
import Button from "antd/lib/button";
import cn from "classnames";


const AnimatedButton =  ({
  children,
  className,
  background,
  hoverBackground,
  type,
  icon,
  loading,
  onClick,
}) => {
  // С помощью useRef получаем элемента
  const spanElement = useRef(null);

  // Функция - при входе курсора
  const handleMouseEnter = () => {
    if (spanElement.current) {
      spanElement.current.style.height = "100%";
      spanElement.current.style.top = "auto";
      spanElement.current.style.bottom = "0"
      spanElement.current.style.color = "#000"
    }
  };

  // Функция - при выходе курсора
  const handleMouseLeave = () => {
    if (spanElement.current) {
      spanElement.current.style.height = "0";
      spanElement.current.style.top = "0";
      spanElement.current.style.color = "blue"

    }
  };

  return (
    <Button
      className={cn(s.myButton, className)}
      style={{ background }}
      type={type}
      htmlType="submit"
      icon={icon}
      loading={loading}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span
        className={s.myButton__hover}
        style={{ background: hoverBackground }}
        ref={spanElement}
      ></span>
    </Button>
  );
};

export default AnimatedButton;
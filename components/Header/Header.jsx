import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.logo}>
        
      </div>
      <nav className={s.navigation}></nav>
      <div className={s.contacts}>
        <div className={s.number}>
          <a>+971 33 305 3355</a>
          <h5>UAE, Dubai, Control Tower, office 0204</h5>
        </div>
        <div className={s.social}>UAE, Dubai, Control Tower, office 0204</div>
      </div>
      <div className={s.language}></div>
    </div>
  );
};

export default Header;

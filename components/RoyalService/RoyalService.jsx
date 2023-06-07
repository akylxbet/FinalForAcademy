import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import s from "./RoyalService.module.scss";
import { useEffect, useState } from "react";
import Group from '../../public/Group.png'
import zdanie from '../../public/zdanie.png'
import sun from '../../public/SunIcon.png'
const RoyalService = () => {
  return (
    <section className={s.royal_service} id="service">
      <div className={s.royalService}></div>
      <div className={s.bc_service}>
        <motion.div
          className={s.royal_logo}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <a href="https://whatsapp.com/" target="_blank">
            <Image
              src={sun}
              width={190}
              height={170}
              alt="logo"
              placeholder="blur"
            />
          </a>
          

        </motion.div>
        <motion.div
          className={s.title}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>ВЫБИРАЙТЕ ЛУЧШЕЕ ДЛЯ СЕБЯ!</h2>
        </motion.div>
        <div className={s.royal_service_content}>
          <a href="https://royal.kg/" target="_blank">
            <motion.div
              className={s.content_item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
            <a href="https://royal.kg/" target="_blank">
            <Image
              src={sun}
              width={79}
              height={79}
              alt="logo"
              placeholder="blur"
            />
          </a>

              <p>На рынке Кыргызстана с 2012 года</p>
            </motion.div>
          </a>

          <a href="https://royal.kg/" target="_blank">
            <motion.div
              className={s.content_item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Image
                className={s.content_img1}
                src={Group}
                width={79}
                height={79}
                alt="logo"
                placeholder="blur"
              />

              <p>Более 3000
                довольных клиентов</p>
            </motion.div>
          </a>

          <a href="https://royal.kg/objects/" target="_blank">
            <motion.div
              className={s.content_item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Image
                className={s.content_img2}
                src={zdanie}
                width={73}
                height={73}
                alt="logo"
                placeholder="blur"
              />

              <p>Более 27
                успешных проектов</p>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoyalService;

import { useRef, useEffect, useState } from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import AnimatedTextCharacter from "../AnimatedText/AnimatedText";
import s from "./Intro.module.scss";
import AnimatedLast from "../AnimatedText/AnimatedLast";

const Intro = () => {
  const videoRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      videoRef.current.autoplay = true;
    }, 3600);
  }, []);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleVideoLoaded = () => {
  //   setVideoLoaded(true);
  //   videoRef.current.play(); // Запуск видео после загрузки
  //   setLoading(false);
  // };

  return (
    <> 

      <section className={s.home}>
        <video
          ref={videoRef}
          controls={false}
          muted
          loop
          autoPlay={true}
          style={{ width: "100%" }}
          // onLoadedData={handleVideoLoaded}
        >
          <source src="/videa.mp4" />
        </video>

        <div className={s.home_bc}>
          <div>
            <div className={s.intro_title}>
              <AnimatedTextCharacter text={"WELCOME TO"} />
            </div>
            <div className={s.intro_last_title}>
              <AnimatedLast text={"Bozuy Kg"} />
            </div>
            <div className={s.hr_home}>
              <hr />
            </div>

            <div className={s.text_home}>
              <AnimatedTextCharacterParagraph
                text={
                  "недвижимость сигмента бизнес+ для деловых и энергичных"
                }
              />
            </div>
          </div>
        </div>
        <div className={s.button_focus_fixed}>
          <button className={s.button_focus}>
            <a href="https://wa.me/+996776111444?text=Здравствуйте,%20можно%20подробнее%20о%20жк%20Brooklyn">
              Связаться с нами
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Intro;

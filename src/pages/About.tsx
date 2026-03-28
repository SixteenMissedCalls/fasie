import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./About.module.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoBG from "@/assets/logo_bg.png";
import AboutPageImg1 from "@/assets/aboutPage_img1.png";
import AboutPageImg2 from "@/assets/aboutPage_img2.png";
import AboutPageImg3 from "@/assets/aboutPage_img3.png";
import AboutPageImg4 from "@/assets/aboutPage_img5.png";
import CheckIcon from "@/assets/check_icon.png";
import DescriprionImg from "@/assets/example.jpg";

const About = () => {
  const footer = useRef<HTMLDivElement>();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#footer" && footer.current) {
      footer.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className={classes["bg-color-w"]}>
      <img className={classes["logo-bg-first"]} src={LogoBG} alt="" />
      <div className={classes.content}>
        <Navbar />
        <div className={classes["flex-container"]}>
          <div className={classes["text-container"]}>
            <p>Наш сервис — новый шаг в будущее ветеринарии.</p>
          </div>
          <div className={classes["img-container"]}>
            <img src={AboutPageImg1} alt="" />
            <img src={AboutPageImg2} alt="" />
            <img src={AboutPageImg3} alt="" />
            <img src={AboutPageImg4} alt="" />
          </div>
        </div>
        <div className={classes.advantages}>
          <div className={`${classes.advantage} ${classes.left}`}>
            <img src={CheckIcon} alt="" />
            <p>
              Персонализация: учитываем породу, возраст, вес и хронические
              болезни.
            </p>
          </div>
          <div className={`${classes.advantage} ${classes.right}`}>
            <img src={CheckIcon} alt="" />
            <p>Экспертиза: база данных, составленная ветеринарными врачами.</p>
          </div>
          <div className={`${classes.advantage} ${classes.left}`}>
            <img src={CheckIcon} alt="" />
            <p>
              Доступность: аналоги и рекомендации, если оригинальный препарат
              дорог или недоступен.
            </p>
          </div>
          <div className={`${classes.advantage} ${classes.right}`}>
            <img src={CheckIcon} alt="" />
            <p>AI-Консультант: помощь в экстренной ситуации 24/7.</p>
          </div>
        </div>
        <div className={classes.description}>
          <div className={classes["text-container"]}>
            <p>Как это работает?</p>
            <br />
            <div>
              <p className={classes["list-item"]}>
                Расскажите о питомце в удобной анкете.
              </p>
              <p className={classes["list-item"]}>
                Наша система анализирует данные и формирует список.
              </p>
              <p className={classes["list-item"]}>
                Получайте готовый список препаратов с инструкциями.
              </p>
              <p className={classes["list-item"]}>
                Ваш личный AI-ассистент всегда на связи.
              </p>
            </div>
          </div>
          <img src={DescriprionImg} alt="" />
        </div>
        <Footer ref={footer} />
      </div>
      <img className={classes["logo-bg-second"]} src={LogoBG} alt="" />
    </main>
  );
};

export default About;

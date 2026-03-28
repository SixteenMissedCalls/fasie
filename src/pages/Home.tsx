import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import catImage from "@/assets/cat_yellow.png";

const Home = () => {
  const footer = useRef<HTMLDivElement>();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickOnLeaveApplicationBtn = () => {
    navigate("/feedback#form");
  };

  const handleClickOnLearnMoreBtn = () => {
    navigate("/about");
  };

  useEffect(() => {
    if (location.hash === "#footer" && footer.current) {
      footer.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <main className={classes["home-bg"]}>
        <Navbar />
        <div className={classes["flex-container"]}>
          <div className={classes["text-container"]}>
            <h1 className={classes["color-white"]}>PetVet</h1>
            <p className={classes["color-white"]}>
              Программно-аппаратный комплекс мониторинга здоровья домашних
              питомцев и подбора аптечки экстренной помощи.
            </p>
            <p className={classes["color-white"]}>
              Проект выполнен при поддержке «Фонда содействия инновациям» в
              рамках программы «Студенческий стартап» федерального проекта
              «Платформа университетского технологического предпринимательства»
            </p>
            <button
              className={classes["color-white"]}
              onClick={handleClickOnLearnMoreBtn}
            >
              Узнать подробнее
            </button>
          </div>
          <div className={classes["img-container"]}>
            <img src={catImage} alt="cat in box" />
            <div className={classes["offset-border"]}></div>
          </div>
        </div>
        <div className={classes["bg-pets"]}>
          <div className={classes["flex-container-column"]}>
            <div className={classes["text-container"]}>
              <h1 className={classes["color-white"]}>С заботой о животных</h1>
              <p className={classes["color-white"]}>
                Аптечка первой помощи для вашего питомца, собранная по
                индивидуальным показаниям.
              </p>
            </div>
            <button
              className={classes["color-white"]}
              onClick={handleClickOnLeaveApplicationBtn}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </main>
      <Footer ref={footer} />
    </>
  );
};

export default Home;

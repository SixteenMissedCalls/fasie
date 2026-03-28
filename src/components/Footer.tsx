import React, { forwardRef, ForwardedRef } from "react";
import classes from "./Footer.module.scss";
import innovation from "../assets/fond_innovation.png";

const Footer = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classes.footer} ref={ref}>
      <div className={classes["flex-container-column"]}>
        <div className={classes["text-container"]}>
          <h1>Наши контакты</h1>
          <div className={classes.bold}>
            <p>+7 (912) 745-48-61</p>
            <p>ddnasibullin@gmail.com</p>
            <div className={classes.tiny}>
              <img
                src={innovation}
                alt="Логотип"
                className={classes.innovation}
              />
              <p>
                Проект выполнен при поддержке «Фонда содействия инновациям» в
                рамках программы «Студенческий стартап» федерального проекта
                «Платформа университетского технологического
                предпринимательства»
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;

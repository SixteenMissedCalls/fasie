import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Feedback.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import RewiewImg1 from '@/assets/review_img1.png';
import RewiewImg2 from '@/assets/review_img2.jpg';
import RewiewImg3 from '@/assets/review_img3.jpg';
import RewiewImg4 from '@/assets/review_img4.jpeg';

const Feedback = () => {
    const form = useRef<HTMLDivElement>();
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#form" && form.current) {
            form.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return(
        <>
        <main>
            <Navbar/>
            <div className={classes['feedback-bg']}>
                <div className={classes['text-container']}>
                    <h1>
                        Помощь в экстренной ситуации 24/7
                    </h1>
                    <div className={classes.line}></div>
                    <p>
                        <b>PetVet</b> — индивидуальная аптечка первой помощи для вашего питомца, созданная с помощью искусственного интеллекта. 
                    </p>
                </div>
            </div>
            <div className={classes['reviews-container']}>
                <h1>
                    Отзывы наших клиентов
                </h1>
                <div className={classes.reviews}>
                    <div className={classes.review}>
                        <img src={RewiewImg1} alt="Image of the user who left the review" />
                        <p>
                            У меня три кошки с разными потребностями. Раньше в аптечке был хаос. Это приложение за 10 минут собрало идеальный набор для каждой, с четкими инструкциями. Теперь я спокойна!
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg2} alt="Image of the user who left the review" />
                        <p>
                            В зоомагазине глаза разбегаются, не знаешь, что действительно нужно. Здесь же получил готовый список именно для моей старой таксы с учетом ее болезней. Очень грамотно!
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg3} alt="Image of the user who left the review" />
                        <p>
                            Пес случайно съел что-то на улице. Паника! Но AI-ассистент в приложении сразу составил алгоритм действий, что делать до визита к врачу. Это невероятно успокаивает!
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg4} alt="Image of the user who left the review" />
                        <p>
                            Один из рекомендованных препаратов был дорогим. Сервис мгновенно предложил три более доступных аналога с такими же свойствами. Сэкономила и не переживаю за качество.
                        </p>
                    </div>

                </div>
            </div>
            <div className={classes['form-bg']} ref={form}>
                <div className={classes['feedback-form-container']}>
                    <div className={classes['text-container']}>
                        <h1>
                            Обратная связь
                        </h1>
                        <p>
                            В целях оперативного рассмотрения ваших обращений просим максимально точно изложить суть вопроса и имеющиеся факты.
                        </p>
                    </div>
                    <FeedbackForm/>
                </div>
            </div>
        </main>
        <Footer ref={footer}/>
    </>
    )
};

export default Feedback;
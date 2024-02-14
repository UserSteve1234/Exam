import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import './style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../Home/style.scss'
// import TimeImg from "../../Home/images/время.png"
// import ValueImg from "../../Home/images/стоимость.png"

function CarouselComponent(props) {

    return (
        <div className='carousel-component'>
            <Carousel
                // renderArrowNext={customArrow}
                showThumbs={true}  // Скрыть точки
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
            >


                <div className="cards slide1">
                    <div className="card cardImage1">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Обзорная по Сочи (из Адлера)</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на
                                побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36
                                годах по проекту архитектора С. И. Воробьева...RА</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage2">
                        <div className="cardWrapper">
                            <p className="cardTitle">Конный тур</p>
                            <h3 className="cardTitle2">Конные прогулки</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Конные прогулки проходят в Лазурной долине. С долины открывается красивый
                                вид
                                на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные
                                инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage3">
                        <div className="cardWrapper">
                            <p className="cardTitle">Квадротур</p>
                            <h3 className="cardTitle2">Пасть дракона</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и
                                самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название).
                                Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage4">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Женский монастырь</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Троице - Георгиевский женский монастырь расположен в селе Лесное в
                                живописном
                                месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная
                                руками человека.
                                Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20
                                километрах
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>

                </div>






                <div className="cards slide2">
                    <div className="card cardImage1">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Обзорная по Сочи (из Адлера)</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на
                                побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36
                                годах по проекту архитектора С. И. Воробьева...RА</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage2">
                        <div className="cardWrapper">
                            <p className="cardTitle">Конный тур</p>
                            <h3 className="cardTitle2">Конные прогулки</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Конные прогулки проходят в Лазурной долине. С долины открывается красивый
                                вид
                                на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные
                                инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage3">
                        <div className="cardWrapper">
                            <p className="cardTitle">Квадротур</p>
                            <h3 className="cardTitle2">Пасть дракона</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и
                                самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название).
                                Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage4">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Женский монастырь</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Троице - Георгиевский женский монастырь расположен в селе Лесное в
                                живописном
                                месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная
                                руками человека.
                                Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20
                                километрах
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>

                </div>



                <div className="cards slide3">
                    <div className="card cardImage1">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Обзорная по Сочи (из Адлера)</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Приглашаем вас на экскурсию
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на
                                побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36
                                годах по проекту архитектора С. И. Воробьева...RА</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage2">
                        <div className="cardWrapper">
                            <p className="cardTitle">Конный тур</p>
                            <h3 className="cardTitle2">Конные прогулки</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Конные прогулки проходят в Лазурной долине. С долины открывается красивый
                                вид
                                на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные
                                инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage3">
                        <div className="cardWrapper">
                            <p className="cardTitle">Квадротур</p>
                            <h3 className="cardTitle2">Пасть дракона</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и
                                самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название).
                                Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>
                    <div className="card cardImage4">
                        <div className="cardWrapper">
                            <p className="cardTitle">Автобусный тур</p>
                            <h3 className="cardTitle2">Женский монастырь</h3>
                            <div className="imgs">
                                <p>6 часов</p>
                                <p>618 р</p>

                            </div>
                            <p className="text1">Троице - Георгиевский женский монастырь расположен в селе Лесное в
                                живописном
                                месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная
                                руками человека.
                                Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20
                                километрах
                            </p>
                            <Link to={"/travels"}>
                                <button className="btn1">Подробнее</button>
                            </Link>
                        </div>

                    </div>

                </div>


            </Carousel>
        </div>
    );
}

export default CarouselComponent;
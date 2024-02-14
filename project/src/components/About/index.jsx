import './style.scss'
import AdultImg from './images/взрослый.png'
import KidsImg from './images/детский.png'
import TimeImg from './images/время.png'
import Elipse from './images/Ellipse.png'
import DateImg from './images/календарь.png'
import FavImg from './images/избранное.png'
import RasImg from './images/допразсохды.png'
import OneImg from './images/1.png'
import TwoImg from './images/2.png'
import PasImg from './images/pasport.png'
import GalImg from './images/галерея.png'
import IzobImg from './images/изобрaj.png'

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Items from '../../db/details.json'
import Carousel from '../common/Carousel/Carousel'
import { toast, ToastContainer } from 'react-toastify'
import Auto from '../common/Carousel/Auto'
import { useTranslation } from "react-i18next"



const About = (props) => {
    const [date, setDate] = useState()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const { id } = useParams()

    function notify(e) {
        toast.success(`Тур забронирован на ${date}`, { theme: 'dark', toastId: 10, })
        e.target.reset()
    }

    const item = Items.find(item => item.id === parseInt(id))

    return (
        <div>
            <ToastContainer />
            <div className="upper">
                <div className="text">
                    <h3 className="yellow yel">{item.title}</h3>
                    <h1 className="white ring">{item.text}</h1>
                    <br /><br />

                    <div className="flex">
                        <Link to={"/travels"}>
                            <button className="btnB">{t('Homepage.to')}</button>
                        </Link>
                        <img src={FavImg} alt="" />
                    </div>

                </div>

            </div>
            <br /><br /><br />
            <div className="down">
                <h2 className="blue">{t('About.desc')}</h2><br /><br />
                <div className="desc">
                    <div className="p">
                        <p>Вас ждет путешествие по "Золотому Кольцу <br /> Абхазии" на Мерседес Спринтер (20 мест). По <br />
                            маршруту вас будет
                            сопровождать <br /> профессиональный гид. Посадка на экскурсию <br /> осуществляется с вашего отеля или
                            ближайшей <br /> автобусной
                            остановки. Пересечение границы без <br /> пересадок. </p>

                    </div>
                    <img src={AdultImg} alt="" width={"178px"} />
                    <img src={KidsImg} alt="" width={"178px"} />
                    <img src={TimeImg} alt="" width={"178px"} />

                </div>

            </div>

            <br /><br /><br />

            <img src={DateImg} alt="" />
            <br /><br />

            <div className="down flexy">

                <div className="next">
                    <h2 className="blue">{t('About.route')}</h2><br /><br />
                    <img src={Elipse} alt="" />
                    <p>Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца <br /> Ольденбурского;</p>
                    <img src={Elipse} alt="" />
                    <p>Смотровая площадка "Прощай Родина", "Чабгарский" карниз, <br /> Подвесной мост через реку "Бзыбь";</p>
                    <img src={Elipse} alt="" />
                    <p>Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии), <br /> Голубое Озеро, Юпшарский каньон
                        ("Каменный мешок"), Озеро <br /> "Рица", Водопады "Девичьи и мужские слезы".</p>

                    <h3>Далее на выбор:</h3>

                    <img src={Elipse} alt="" />
                    <p>Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" <br /> водопад, храм "Симона Кананита",
                        Лебединое
                        озеро.</p>
                    <img src={Elipse} alt="" />
                    <p>Термальный источник в с. Приморское. </p>



                </div>
                <Auto />
                <br /><br /><br /><br />

            </div>
            <div className="down">
                <img src={RasImg} alt="" />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h2 className="blue">{t('About.info')}</h2>
                <br /><br /><br />
                <h3>{t('About.requirements')}</h3>
                <div className="pass">
                    <div className="port">
                        <img src={PasImg} alt="" />
                        <h3 className="blue">{t('About.passport')}</h3><br />
                        <img src={PasImg} alt="" />
                        <h3 className="blue">{t('About.certificate')}</h3>
                        <p>Несовершеннолетние дети пересекают границу в <br /> сопровождении родителей, в сопровождении
                            законного <br />
                            представителя (нотариально заверенная доверенность <br /> с указанием страны вывоза ребенка).</p>
                    </div>
                    <div className="imgs">
                        <img src={OneImg} alt="" /><br /><br /><br />
                        <img src={TwoImg} alt="" />
                    </div>
                </div>
                <br /><br /><br /><br />

            </div>
            <img src={GalImg} alt="" />
            <br /><br /><br /><br />
            <div className="flex items">
                <h2 className="blue">{t('Homepage.feedback')}</h2>
                <a href="/travels" className="seeAll">{t('Homepage.see')}</a>
            </div>

            <br /><br /><br />

            <Carousel />

            <br /><br /><br /><br /><br /><br />

            <div className="end">
                <div className="right">
                    <img src={IzobImg} alt="" width="803px" />
                </div>
                <div className="left">
                    <h2 className="blue">{t('About.book')}</h2>
                    <input type="date" onChange={(e) => setDate(e.target.value)} /><br />
                    <input type="text" placeholder='Количество взрослых' /><br />
                    <input type="text" placeholder='Количество детей' /><br /><br /><br />
                    <div className="but">
                        <button className="btnB" onClick={notify}>Забронировать</button>
                        <img src={FavImg} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
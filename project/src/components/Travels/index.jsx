import './style.scss'
import RectangleImg from './images/RectangleMain.png'
import AdultImg from './images/взрослый.png'
import KidsImg from './images/детский.png'
import TimeImg from './images/время.png'
import FavImg from './images/избранное.png'


import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Items from '../../db/details.json'
import { useTranslation } from "react-i18next"

function Travels(props) {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [selectedOption, setSelectedOption] = useState();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div>
            <div className="zagolovok">
                <h1>{t('Travelspage.our')}</h1>
            </div>
            <div className="upperB">
                <div className="links">
                    <p className='tur'>{t('Homepage.f_tour')}</p>
                    <p className='jip'>{t('Homepage.s_tour')}</p>
                    <p className='yaxt'>{t('Homepage.th_tour')}</p>
                    <p className='kani'>{t('Homepage.fth_tour')}</p>
                </div><br />
                <div className="inputs">
                    <input type="text" placeholder={"Абхазия"} />
                    <input type="text" placeholder={"5 января 2024"} />
                    <input type="text" placeholder={"5 человек"} />
                    <button className="btnB">{t('Travelspage.show')}</button>
                </div>
            </div>
            <div className="main">
                <div className="filter">
                    <h3 className="blue">{t('Travelspage.filters')}</h3>
                    <h3>{t('Travelspage.cost')}</h3>
                    <div className="input-filter">
                        <input type="number" placeholder='От' />
                        <input type="number" placeholder='До' />

                    </div><br />
                    <hr /><br />
                    <h3>{t('Travelspage.persons')}</h3>
                    <div className="filter-btns">
                        <button className="buttonHM">1 чел.</button>
                        <button className="buttonHM">2 чел.</button>
                        <button className="buttonHM">3 чел.</button>
                        <button className="buttonHM">4 чел.</button>
                        <button className="buttonHM">5 чел.</button>
                        <button className="buttonHM">6 чел.</button>
                        <button className="buttonHM">7 чел.</button>
                        <button className="buttonHM">8 чел.</button>
                        <button className="buttonHM">9 чел.</button>
                        <button className="buttonHM">10 чел.</button>
                        <button className="buttonHM2">Больше 10 чел.</button>
                    </div><br /><br />
                    <hr /><br />
                    <h3>{t('Travelspage.place')}</h3>
                    <input type="radio" id='1' value="option1" checked={selectedOption === 'option1'} onChange={() => handleOptionChange('option1')} />
                    <label htmlFor="1">Абхазия</label><br />
                    <input type="radio" id='2' value="option2" checked={selectedOption === 'option2'} onChange={() => handleOptionChange('option2')} />
                    <label htmlFor="2">Красная поляна</label><br />
                    <input type="radio" id='3' value="option3" checked={selectedOption === 'option3'} onChange={() => handleOptionChange('option3')} />
                    <label htmlFor="3">Сочи</label><br />
                    <input type="radio" id='4' value="option4" checked={selectedOption === 'option4'} onChange={() => handleOptionChange('option4')} />
                    <label htmlFor="4">Адлер</label><br />
                    <input type="radio" id='5' value="option5" checked={selectedOption === 'option5'} onChange={() => handleOptionChange('option5')} />
                    <label htmlFor="5">Адлер</label>

                    <br />
                    <hr />
                    <br />
                    <h3>{t('Travelspage.duration')}</h3>
                    <br />
                    <hr />
                    <br />
                    <h3>{t('Travelspage.date')}</h3>
                    <br />
                    <hr />
                    <br />
                    <button className='btnB'>{t('Travelspage.show')}</button>
                    <br />

                </div>

                <div className="tours">
                    <h2 className='blue'>{t('Travelspage.tours')}</h2>

                    {
                        Items.map((item, index) => {
                            return (



                                <div className="tour" key={index}>
                                    <img src={RectangleImg} alt="" />
                                    <div className="titles">
                                        <p className='yellow'>{item.title}</p>
                                        <h3>{item.text}</h3>
                                        <div className="imgs">
                                            <img src={AdultImg} alt="" />
                                            <img src={KidsImg} alt="" />
                                            <img src={TimeImg} alt="" />
                                        </div>
                                        <p className='text'>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес <br /> Спринтер (20 мест). По маршруту вас будет сопровождать <br /> профессиональный гид. Посадка на экскурсию осуществляется с <br /> вашего отеля или ближайшей автобусной остановки. Пересечение <br /> границы без пересадок...</p>
                                        <div className="it">
                                            <Link to={"/travels/details/" + item.id} >
                                                <button className='btnB'>{t('Travelspage.details')}</button>
                                            </Link>
                                            <img src={FavImg} alt="" />
                                        </div>

                                    </div>
                                </div>







                            )
                        })
                    }
                </div>
                <div className="linkz">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">6</a>
                    <a href="#">7</a>
                </div>
            </div>
        </div>
    );

}

export default Travels;
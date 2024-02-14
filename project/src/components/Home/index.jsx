import './style.scss'
import ZagolImg from './images/заголовок.png'
import SocialImg from './images/соц сети.png'
import VideoImg from './images/видео.png'
import AboutImg from "./images/о нас.png"
import GalImg from "./images/галерея.png"
import OneImg from "./images/1.png"
import TwoImg from "./images/2.png"
import ThreeImg from "./images/3.png"
import ForImg from "./images/4.png"


import CarouselComponent from '../common/Carousel'
import { Link } from 'react-router-dom'
import SecCarousel from '../common/Carousel/Carousel'
import { useTranslation } from "react-i18next"
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

function Home(props) {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [form, setForm] = useState({})


    function handleChange(e) {
        e.preventDefault()
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function Submit(e) {
        e.preventDefault()

        const templateParams = {
            from_name: form.name,
            to_name: 'admin',
            email: form.email,
            phone: form.phone,
        }

        emailjs
            .send('service_gmail98q', 'template_0zhigrt', templateParams, {
                publicKey: '6g74YBR0OwKP3P-wf',
            })
            .then(
                (response) => {
                    toast.success('Ваше сообщение отправлено!', { theme: "dark" })
                },
                (err) => {
                    toast.error('Что-то пошло не так, попробуйте позже', { theme: "dark" })
                },
            );

        e.target.reset()
    }

    return (
        <div className="home">
            <div className="upper">
                <div className="left">
                    <img src={ZagolImg} alt="" className='zagol' />
                    <Link to={"/travels"}>
                        <button className="btnB">{t('Homepage.to')}</button>
                    </Link>
                </div>
                <div className="right">
                    <img src={SocialImg} alt="" className='social' />
                </div>
            </div>
            <img src={VideoImg} alt="" className="video" />
            <div className="downer">
                <div className="examples">
                    <div className="exFlex">
                        <h2 className="ex">{t('Homepage.popular')}</h2>
                        <Link to="/travels" className="seeAll">{t('Homepage.see')}</Link>
                    </div>
                    <CarouselComponent />

                </div>
                <br /><br /><br />
                <img src={AboutImg} alt="" className="imgAbout"/>
                <br /><br />
                <div className="examples types">
                    <h2 className="ex">{t('Homepage.types')}</h2>
                    <br /><br />
                    <div className="exurs">
                        <div className="autobus">
                            <img src={OneImg} alt="" />
                            <h3 className="ex">{t('Homepage.f_tour')}</h3>
                            <p className="black">Один из самых насыщенных впечатлениями, доступных по цене и популярных видов
                                отдыха. Во время одной поездки можно посмотреть достопримечательности сразу нескольких
                                городов, причем обойдется это едва ли не в разы дешевле классического экскурсионного тура с
                                ночевками в отелях.</p>
                        </div>
                        <div className="jip">
                            <img src={TwoImg} alt="" />
                            <h3 className="ex">{t('Homepage.s_tour')}</h3>
                            <p className="black">Это путешествие на автомобилях высокой проходимости с преодолением естественных
                                препятствий, это экстремальный вид спорта и отдыха, представляющий собой прохождение
                                туристического маршрута по бездорожью на автомобилях.</p>
                        </div>
                        <div className="yaxta">
                            <img src={ThreeImg} alt="" />
                            <h3 className="ex">{t('Homepage.th_tour')}</h3>
                            <p className="black">Это то же, что круиз на лайнере или прогулка на пароме, только на яхте больше
                                свободы, размеры судна в разы меньше, нет назойливой команды, можно самостоятельно
                                почувствовать себя капитаном, постоять за штурвалом. Именно здесь вы почувствуете величайшие
                                просторы Черногор моря.</p>
                        </div>
                        <div className="kanyon">
                            <img src={ForImg} alt="" />
                            <h3 className="ex">{t('Homepage.fth_tour')}</h3>
                            <p className="black">Это экстремально-спортивный вид отдыха, который заключается в преодолении
                                каньонов (обводненных или нет) при помощи альпинистского и иного снаряжения, а иногда и
                                вброд, но без лодок или иных плавсредств.</p>
                        </div>

                    </div>
                    <br /><br />
                    <p className="choose">Выбирайте на нашем сайте экскурсию, которая подходит именно вам и <br /> записывайтесь
                        онлайн
                        без очередей, просто и быстро!</p>
                    <Link to="/travels">
                        <button className="btnB to">{t('Homepage.to')}</button>
                    </Link>
                    <br /><br />


                </div>
                <img src={GalImg} alt="" />

                <div className='examples'>
                    <div className="exFlex">
                        <h2 className="ex">{t('Homepage.feedback')}</h2>
                        <Link to="/travels" className="seeAll">{t('Homepage.see')}</Link>
                    </div>

                    <br /><br /><br />
                    <SecCarousel />
                    <br /><br /><br /><br />
                </div>


                <form onSubmit={Submit} >
                    <div className="empty"></div>
                    <div className="formFill">
                        <h1>{t('Homepage.form_title')}</h1>
                        <h3 className="yellow">{t('Homepage.form_sec')}</h3><br /><br /><br />
                        <input type="text" className="transparent" placeholder="Имя" name='name' onChange={handleChange} required /><br /><br />
                        <input type="number" className="transparent" placeholder="Телефон" name='phone' onChange={handleChange} required /><br /><br />
                        <input type="Email" className="transparent" placeholder="Почта" name='email' onChange={handleChange} required /><br /><br /><br /><br />
                        <button className="btnB">{t('Homepage.request')}</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Home;
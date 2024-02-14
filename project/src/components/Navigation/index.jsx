import { Link, Outlet } from 'react-router-dom'
import "./style.scss"
import logoImg from '../../assets/images/logo.png'
import Footer from './Footer.jsx'
import { ToastContainer } from 'react-toastify'
import { useTranslation } from "react-i18next"
import { useState } from 'react'


function Navigation() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "ru" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    return (
        <div className="all">

            <div className='navbar'>
                <div id="navbar-wrapper">
                    <img src={logoImg} alt="" />
                </div>
                <div className="nav-links">
                    <Link to="/home">{ t('nav.home') }</Link>
                    <Link to="/travels">{ t('nav.excursions') }</Link>
                    <Link to="/personal">{ t('nav.personal') }</Link>
                </div>
                <div className="auth">
                    <span onClick={handleChangeLanguage}>
                        {
                            currentLanguage === "ru" ?
                                "Рус" : "Eng"
                        }
                    </span>
                </div>

            </div>

            <ToastContainer />

            <Outlet />

            <Footer />
        </div>
    );
}

export default Navigation;
import logoColorImg from '../../assets/images/logo_color 1.png'
import telegramLinks from '../../assets/images/вотсап телеграм.png'
import socialMedia from '../../assets/images/соц сети (1).png'
import Post from '../../assets/images/почта.png'
import './footer.scss'

function Footer() {
    return (
        <div className="div">
            <div className="img">
                <img src={logoColorImg} alt="" className='baloon' />
            </div>
            <div className="footer-links">
                <a href="/home">Главная</a><br />
                <a href="/travels">Экскурсии</a> <br />
                <a href="/about">Личный кабинет</a>
            </div>
            <div className="telegram-links">
                <img src={telegramLinks} alt="" />
            </div>
            <div className="social-media">
                <img src={Post} alt="" />
                <img src={socialMedia} alt="" />
            </div>
        </div>
    );
}

export default Footer;
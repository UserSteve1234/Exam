import { Carousel } from 'react-responsive-carousel'
import SelfImg from "../../Home/images/Rectangle 26.png"
import SelfOneImg from "../../Home/images/Rectangle 26 (1).png"
import '../../Home/style.scss'
import './styles.scss'

function SecCarousel(props) {
    
    return (
        <div className="examples">
            
            <Carousel
                // renderArrowNext={customArrow}
                showThumbs={false}  // Скрыть точки
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                // renderArrowPrev={(onClickHandler) => customArrow(onClickHandler, 'prev')}
            >


                <div className="cards">
                    <div className="n1" style={{backgroundColor: "lightgray"}}>
                        <div className="imgSelf">
                            <img src={SelfImg} alt="" />
                        </div>
                        <div className="comment">
                            <h4 className="black">Иван Иванов, 25 лет</h4>
                            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                    <div className="n1 n2" style={{backgroundColor: "lightgray"}}>
                        <div className="imgSelf">
                            <img src={SelfOneImg} alt="" />
                        </div>
                        <div className="comment">
                            <h4 className="black">Иван Иванов, 25 лет</h4>
                            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>


                </div>
                <div className="cards">
                    <div className="n1" style={{backgroundColor: "lightgray"}}>
                        <div className="imgSelf">
                            <img src={SelfImg} alt="" />
                        </div>
                        <div className="comment">
                            <h4 className="black">Иван Иванов, 25 лет</h4>
                            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                    <div className="n1 n2" style={{backgroundColor: "lightgray"}}>
                        <div className="imgSelf">
                            <img src={SelfOneImg} alt="" />
                        </div>
                        <div className="comment">
                            <h4 className="black">Иван Иванов, 25 лет</h4>
                            <p className="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>


                </div>
                
            </Carousel>
        </div>
    );
}

export default SecCarousel;
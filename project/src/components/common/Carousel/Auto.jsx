import PhotoImg from '../../About/images/фото.png'
import { Carousel } from 'react-responsive-carousel';
import './auto.scss'

function Auto() {
    return ( 
        <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        >
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
            <div className='img_f'><img src={PhotoImg} alt="" className='img' /></div>
        </Carousel>
     );
}

export default Auto;
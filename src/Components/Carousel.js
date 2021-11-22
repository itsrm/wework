import img from '../Images/img.jpg'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
const Carousels = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return ( 
        <>
            <Carousel dotPosition='bottom' autoplay="true" style={{
                width: '80%',
                height: '800px',
                justifyContent: 'center',
            }}>
                <div className="container">
                    <img src={img} alt=""/>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
     );
}
 
export default Carousels;
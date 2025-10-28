import './home.css';
import xato from '../photos/xat7.png';
import BMI from '../components/bmi/BMI';

export function Home() {
    return (
        <div className="home" id='home'>
            <div className="bmi-home">
                <BMI />
            </div>

            <div className="img">
                <img src={xato} alt="" />
                <div className="xato-name">
                    <h4>ექიმი ნუტრიციოლოგი</h4>
                    <h2>ხათუნა გურეშიძე</h2>
                </div>

            </div>

        </div>
    )
}
import './service.css';
import { RiArrowRightDoubleFill } from "react-icons/ri";

export function Service() {
    return (
        <div className="services" id="services">
            <div className="services-div">
                <h1>ჩაერთე მარათონში და აირჩიე <br></br> <span>შენზე მორგებული პირობები</span></h1>
                <div className="services-content">

                    <div className="services-card">
                        <h3>ერთ კვირიანი <br></br>მარათონი</h3>
                        <div className="card-content">
                            <p>კვერცხი</p>
                            <p>კომპოსტო</p>
                            <p>წიწიბურა</p>
                            <p>თევზი</p>
                            <p>ფორთოხალი</p>
                        </div>
                        <button>ვრცლად <RiArrowRightDoubleFill className="arrow-icon"/></button>
                    </div>

                    <div className="services-card">
                        <h3>ერთ თვიანი <br></br>მარათონი</h3>
                        <div className="card-content">
                            <p>ოსპი</p>
                            <p>ნიგოზი</p>
                            <p>თაფლი</p>
                            <p>ყაბაყი</p>
                            <p>ხორცი</p>
                        </div>
                        <button>ვრცლად <RiArrowRightDoubleFill className="arrow-icon" /></button>
                    </div>

                    <div className="services-card">
                        <h3>ერთ წლიანი <br></br>მარათონი</h3>
                        <div className="card-content">
                            <p>ბროკოლი</p>
                            <p>ბანანი</p>
                            <p>შოკოლადი</p>
                            <p>სოიო</p>
                            <p>სტაფილო</p>
                        </div>
                        <button>ვრცლად <RiArrowRightDoubleFill className="arrow-icon"/></button>
                    </div>

                </div>
            </div>
        </div>
    );
}

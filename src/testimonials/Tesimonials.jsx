import './testimonials.css';
import user1 from '../photos/testimonials/user10.jpg';
import user2 from '../photos/testimonials/user11.jpg';
import user3 from '../photos/testimonials/user12.png';
import { PiQuotesFill } from "react-icons/pi";


export function Testimonials() {
    return (
        <div className="testimonials" id="testimonial">

            <div className="testimonial-div">

                <h1>კმაყოფილი მომხმარებლები</h1>

                <div className="testimonial-content">

                    <div className="testimonial-card">
                        <img src={user1} alt="user" />
                        <div className="test-card-content">
                            <p>პირველად ჩემს ცხოვრებაში ვენდე უცხო ადამიანს და ესე ძალიან თუ გამიმართლებდით არ მეგონა. თქვენს 
                                რჩევებს მივყევი სიტყვა სიტყვით და სიცოცხლის ხალისი დამიბრუნეთ და ხმამაღლა მინდა გითხრათ, რომ ხათუნა
                                ექიმო მიყვარხართ.
                            </p>

                            <div className="test-small">
                                <h4>ლიზიკო</h4>
                                <p>ორთვიანი მარათონი: <span>-12კგ</span></p>
                                
                            </div> 
                        </div>
                        <PiQuotesFill className='test-icon'/>
                    </div>

                    <div className="testimonial-card">
                        <img src={user2} alt="user" />
                        <div className="test-card-content">
                            <p>თამამად შემიძლია ვთქვა, რომ ძალიან გამიმართლა თქვენში, ათობით მარათონი მაქვს გავლილი და 
                                თქვენთან რომ შედეგი მივიღე, ესეთი არავისთან მქონია. ძალიან აღმატებული გრძნობაა ჩემთვის, 
                                რომ თქვენი დახმარებით, დაკლებულ წონას ვინარჩუნებ. 
                            </p>

                            <div className="test-small">
                                <h4>დავითი</h4>
                                <p>ერთ წლიანი მარათონი: <span>-35კგ</span></p>
                                
                            </div> 
                        </div>
                        <PiQuotesFill className='test-icon'/>
                    </div>

                    <div className="testimonial-card">
                        <img src={user3} alt="user" />
                        <div className="test-card-content">
                            <p>ძალიან სკეპტიკურად ვიყავი განწყობილი ამ მარათონებთან დაკავშირებით, 
                                თუმცა თქვენ ჩემი გაოცება ნამდვილად მოახერხეთ. ორკვირაში 5 კილოს დაკლება, 
                                იდეალური შედეგია ჩემთვის. 
                            </p>

                            <div className="test-small">
                                <h4>ბესიკი</h4>
                                <p>ორ კვირიანი მარათონი: <span>-5კგ</span></p>
                                
                            </div> 
                        </div>
                        <PiQuotesFill className='test-icon'/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

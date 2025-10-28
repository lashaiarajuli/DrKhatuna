import './contact.css';
import { ContactForm } from './Form.jsx';
import { TfiEmail } from "react-icons/tfi";
import { SlPhone } from "react-icons/sl";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import contImg from '../photos/contact-img.png';


export function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact-div">
                <div className="form">
                    <ContactForm className="xora" />
                </div>

                <div className="contact-content">

                    <div className="face-group">
                        <h3>შეგიძლიათ შემომიერთდეთ <br></br>ფეისბუქ ჯგუფში</h3>
                        <img src={contImg} alt="contact-img" />
                        <a href="https://www.facebook.com/groups/1899648643693119" target="_blank" rel="noopener noreferrer">
                            <button>შემომიერთდით</button>
                        </a>
                    </div>

                    <div className="content-para">
                        <p><TfiEmail className='contact-icon' />KhatunaEqimi@gmail.com </p>
                        <p><SlPhone className='contact-icon' />592 61 33 65</p>
                    </div>

                    <div className="social-icons">
                        <a
                            href="https://www.facebook.com/khatuna.gureshidze"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="social-icon" />
                        </a>

                        <a
                            href="https://www.instagram.com/YourInstagramProfile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="social-icon insta" />
                        </a>

                        <a
                            href="https://www.youtube.com/@YourYouTubeChannel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoYoutube className="social-icon youtube" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

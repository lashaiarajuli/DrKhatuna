import './footer.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className='footer'>
            <h1 class="credit"> Created By <span> Lasha iarajuli</span>  &copy;2025 <span className='tire'>/ </span></h1>

            <div class="footer-icons">
                <a href="https://www.linkedin.com/in/lasha-iarajuli-092a4336b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="linkedin" />
                </a>
                <a href="https://github.com/lashaiarajuli" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github" />
                </a>

                <a href="https://www.facebook.com/LashaWebStudio" target="_blank" rel="noopener noreferrer">
                    <FaSquareFacebook className="facebook" />
                </a>
            </div>

        </footer>
    );
}

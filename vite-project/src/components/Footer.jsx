import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:info@manglayatan.in" className="footer-link">
            <FaEnvelope className="footer-icon" />
            <span>Email: info@manglayatan.in</span>
          </a>
          <a href="https://www.manglayatan.in/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGlobe className="footer-icon" />
            <span>Website</span>
          </a>
          <a href="tel:+1234567890" className="footer-link">
            <FaPhone className="footer-icon" />
            <span>Phone: +123 456 7890</span>
          </a>
        </div>
        <div className="footer-developer">
          <p>Developed By: <a href="https://www.linkedin.com/in/ekantverma" target="_blank" rel="noopener noreferrer">Ekant Verma</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Manglayatan University. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

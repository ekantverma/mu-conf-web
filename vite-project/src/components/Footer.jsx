import './Footer.css';

const Footer = () => {
  return (
  <footer className="animated-footer">
    <div className="footer-content">
      <div className="university-details">
        <h2>Manglayatan University, Aligarh</h2>
        <ul>
          <li>Email: <a href="mailto:info@mangalayatan.in">info@mangalayatan.in</a></li>
          <li>Website: <a href="https://www.mangalayatan.in">www.mangalayatan.in</a></li>
          <li>Phone: <a href="tel:+911234567890">+91 12345 67890</a></li>
        </ul>
      </div>
      <div className="developer-details">
        <h2>Developed By Ekant Verma</h2>
        <ul>
          {/* <li>Follows On</li> */}
          <li><a href="https://www.linkedin.com/in/ekantverma" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin"></i> ekantverma</a></li>
          <li><a href="https://github.com/ekantverma" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-github"></i> ekantverma</a></li>
          <li><a href="https://www.instagram.com/ekantverma_13/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-instagram"></i> ekantverma_13</a></li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      {/* <p>&copy; 2024 Manglayatan University. All rights reserved.</p> */}
       <p>&copy; 2024 Ekant Verma developer. All rights reserved.</p> 
    </div>
  </footer>
  );
}

export default Footer;

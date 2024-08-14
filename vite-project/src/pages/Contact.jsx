import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
    <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
    </div>
    <div className="contact-content">
        <div className="contact-info">
            <h2>Our Contact Information</h2>
            <p><strong>Address:</strong> Mangalayatan University Campus, Aligarh-Mathura Highway, Beswan, Aligarh, Uttar Pradesh, India</p>
            <p><strong>Phone:</strong> 9358333333 , 9359555555</p>
            <p><strong>Email:</strong> admissions@mangalayatan.edu.in</p>
            <p><strong>Website:</strong> www.mangalayatan.in</p>
        </div>
        <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</div>

  );
}

export default Contact;

import './About.css'

const About = () => {
  return (
    <div className='about-main'>
      <div className='about'>
        <h2>About Us</h2>
      </div>
      <div className="about-page">
      <div className="about-page">
    <section className="about-section">
        <div className="about-text">
            <h2>Section Title</h2>
            <p>
                Here is some detailed text about this section. Provide a description or information related to the heading above.
            </p>
        </div>
        <div className="about-image">
            <img src="path/to/image.jpg" alt="Description" />
        </div>
    </section>
    <section className="about-section">
      <div className="about-image">
            <img src="path/to/image.jpg" alt="Description" />
      </div>
      <div className="about-text">
            <h2>Section Title</h2>
            <p>
                Here is some detailed text about this section. Provide a description or information related to the heading above.
            </p>
      </div>
    </section>
    <section className="about-section">
        <div className="about-text">
            <h2>Section Title</h2>
            <p>
                Here is some detailed text about this section. Provide a description or information related to the heading above.
            </p>
        </div>
        <div className="about-image">
            <img src="path/to/image.jpg" alt="Description" />
        </div>
    </section>
</div>
</div>

    </div>
  );
}

export default About;

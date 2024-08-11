import ImageCarousel from '../components/Carousel';
import Posters from '../components/Posters';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <div className="message-overlay">
          <h1><strong>Welcome to Manglayatan University 🙏</strong></h1>
          <p className="intro-text">
            Discover excellence in education and innovation at the <strong>Department of Computer Applications 🚀</strong> of Manglayatan University.
          </p>
          <p className="praise-text">
            Our department stands at the forefront of technological advancements, fostering creativity, critical thinking, and hands-on experience. Join us to be a part of a vibrant academic community dedicated to shaping the future of technology.
          </p>
        </div>
      </div>
      <ImageCarousel />
      <Posters/>
    </div>
  );
}

export default Home;


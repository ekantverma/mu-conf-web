import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showArrows={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
            {"<"}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
            {">"}
          </button>
        )
      }
    >
      <div>
        <img className="imgs" src="https://images.collegedunia.com/public/college_data/images/campusimage/1587061762bld.png?mode=stretch" alt="Slide 1" style={imageStyles} />
        {/* <p className="legend">Slide 1</p> */}
      </div>
      <div>
        <img src="https://www.mangalayatan.in/wp-content/uploads/2023/05/banner-4.jpg" alt="Slide 2" style={imageStyles} />
        {/* <p className="legend">Slide 2</p> */}
      </div>
      <div>
        <img src="https://btech-admission-course.weebly.com/uploads/1/2/6/2/126232305/blog-banner-mu-btech_orig.jpg" alt="Slide 3" style={imageStyles} />
        {/* <p className="legend">Slide 3</p> */}
      </div>
    </Carousel>
  );
}

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
};

const imageStyles = {
  width: '1263px',  // This will make the image take the full width of the container
  height: '395px',  // Set a fixed height for the images
  objectFit: 'cover',  // This ensures the image covers the area without stretching
};

export default ImageCarousel;

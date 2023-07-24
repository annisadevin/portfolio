import { Carousel } from 'react-carousel-minimal';
import './CustomCarousel.css';

const CustomCarousel = ({ carouselData }) => {
      const captionStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
      }

      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={carouselData}
                time={2000}
                width="500px"
                height="300px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="#86566F"
                slideImageFit="cover"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
}

export default CustomCarousel;
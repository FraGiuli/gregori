import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = ({ images }) => {
  return (
    <Zoom arrows={false} scale={1.4} duration={1000}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Slider;

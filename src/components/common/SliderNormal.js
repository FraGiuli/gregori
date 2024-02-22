import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SliderNormal = ({ images }) => {
  return (
    <Zoom scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%", maxHeight: "550px" }}
            alt="Slide Image"
            src={each}
            draggable="false"
          />
        </div>
      ))}
    </Zoom>
  );
};

export default SliderNormal;

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useContentful from "../../services/useContentful";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { getHomePhotos } = useContentful();
  const [homePhotos, setHomePhotos] = useState([]);

  function showSlideNodes() {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }

  useEffect(() => {
    showSlideNodes();
  }, [emblaApi]);

  useEffect(() => {
    getHomePhotos()
      .then((response) => {
        setHomePhotos(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {homePhotos.map((homePhoto) => {
          return (
            <div
              key={homePhoto}
              className="embla__slide"
              style={{
                backgroundImage: `url(${homePhoto})`,
                backgroundSize: "cover",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

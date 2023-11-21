import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useContentful from "../../services/useContentful";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { getHomePhotos } = useContentful();
  const [homePhotos, setHomePhotos] = useState([]);
  console.log("HOMEPHOTOS", homePhotos);

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
    //<div className="embla__slide">Slide 1</div>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {homePhotos.map((homePhoto) => {
          return (
            <div className="embla__slide">
              <img className="embla__photo" src={homePhoto} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

import arrowsUp from "../../img/arrows_up.svg";
import arrowsDown from "../../img/arrows_down.svg";
import arrowSmall from "../../img/arrow_small.svg";
import css from "./Services.module.scss";
import kitchenB from "../../img/kitchen_b.png";
import kitchenM from "../../img/kitchen_m.png";
import kitchenS from "../../img/kitchen_s.png";
import roomB from "../../img/livingrm_b.png";
import roomM from "../../img/livingrm_m.png";
import roomS from "../../img/livingrm_s.png";
import bathroomB from "../../img/bathroom_b.png";
import bathroomM from "../../img/bathroom_m.png";
import bathroomS from "../../img/bathroom_s.png";
import terraceB from "../../img/terrace_b.png";
import terraceM from "../../img/terrace_m.png";
import terraceS from "../../img/terrace_s.png";
import { useEffect, useState, useRef } from "react";
import _ from "lodash";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const Services = () => {
  const images = [
    [roomB, roomM, roomS],
    [kitchenB, kitchenM, kitchenS],
    [bathroomB, bathroomM, bathroomS],
    [terraceB, terraceM, terraceS],
  ];
  const descriptions = [
    "Get these gorgeous modern living room. Refresh your own space today.",
    "Get the modern luxury kitchen look. Explore chef driven interiors and decor.",
    "If there's a room that deserves a little luxury, it's the bathroom.",
    "Wish to lounge for a drink or a dish, while enjoying an amazing panorama?",
  ];
  const totalElements = 4;
  const windowWidth = useWindowWidth();
  const [imageIndex, changeImgIndex] = useState(0);
  const [description, changeDescription] = useState(descriptions[0]);
  let [currentElement, changeCurrentElement] = useState(0);
  const [currentBackground, changeBackground] = useState(images[0][0]);
 
  // delay scrolling
  const delayedScroll = useRef(_.debounce((e) => changeInfoOnScroll(e), 500))
    .current;
  const changeOnScroll = (e) => delayedScroll(e);

  // calculate image index according to resolution
  function calcImgIndex() {
    if (windowWidth <= 375) changeImgIndex(2);
    else if (windowWidth <= 834) changeImgIndex(1);
    else if (windowWidth > 834) changeImgIndex(0);
    console.log(imageIndex);
  }

  // reload image according to resolution if index(resolution) change
  useEffect(() => {
    changeBackground(images[currentElement][imageIndex]);
  }, [imageIndex]);

  // preload images into cache
  useEffect(() => {
    calcImgIndex();
    images.forEach((image) => {
      const newImage = new Image();
      newImage.src = image[imageIndex];
      window[image[imageIndex]] = newImage;
    });
  });

  // change image on click
  const changeInfoOnClick = (e) => {
    changeDescription(descriptions[e.target.id]);
    changeCurrentElement(e.target.id);
    changeBackground(images[e.target.id][imageIndex]);
  };

  // change image on scroll
  const changeInfoOnScroll = (e) => {
    if (e.deltaY < 0 && currentElement > 0) {
      changeCurrentElement(--currentElement);
      changeDescription(descriptions[currentElement]);
      changeBackground(images[currentElement][imageIndex]);
    } else if (e.deltaY > 0 && currentElement < totalElements - 1) {
      changeCurrentElement(++currentElement);
      changeDescription(descriptions[currentElement]);
      changeBackground(images[currentElement][imageIndex]);
    }
  };

  return (
    <div className={css.main} onWheel={changeOnScroll}>
      <div className={css.scrollInfo}>
        <img src={arrowsUp} alt="arrow up" className={css.scrollInfoArrow} />
        <div className={css.scrollInfoText}>
          scroll <br />
          for view services
        </div>
        <img
          src={arrowsDown}
          alt="arrow down"
          className={css.scrollInfoArrow}
        />
      </div>
      <div className={css.servicePicker}>
        <a
          href="#"
          id="0"
          onClick={changeInfoOnClick}
          className={currentElement == 0 ? css.servicePickerActive : null}
        >
          Living Room
        </a>
        <a
          href="#"
          id="1"
          onClick={changeInfoOnClick}
          className={currentElement == 1 ? css.servicePickerActive : null}
        >
          Kitchen
        </a>
        <a
          href="#"
          id="2"
          onClick={changeInfoOnClick}
          className={currentElement == 2 ? css.servicePickerActive : null}
        >
          Bathroom
        </a>
        <a
          href="#"
          id="3"
          onClick={changeInfoOnClick}
          className={currentElement == 3 ? css.servicePickerActive : null}
        >
          Terrace
        </a>
      </div>
      <div
        className={css.serviceImgage}
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <div className={css.serviceImageDescription}>
          <p>{description}</p>
          <a href="#">
            More <img src={arrowSmall} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

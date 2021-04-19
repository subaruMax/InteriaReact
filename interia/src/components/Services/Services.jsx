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

const Services = () => {
   let currentBackground = roomB;
  return (
    <div className={css.main}>
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
      <div id="servicePicker" className={css.servicePicker}>
        <a href="#" id="livingRoom">
          Living Room
        </a>
        <a href="#" id="kitchen">
          Kitchen
        </a>
        <a href="#" id="bathroom">
          Bathroom
        </a>
        <a href="#" id="terrace">
          Terrace
        </a>
      </div>
      <div
        className={css.serviceImgage}
        style={{ backgroundImage: `url(${currentBackground})` }}
        id="mainIMG"
      >
        <div className={css.serviceImageDescription}>
          <p id="mainIMGdescription">
            Get the modern luxury kitchen look. Explore chef driven interiors
            and decor.
          </p>
          <a href="#">
            More <img src={arrowSmall} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

import logoSmall from "../../img/logo_small.svg";
import location from "../../img/location_mark.svg";
import phone from "../../img/phone_ico.svg";
import youtube from "../../img/youtube_ico.svg";
import facebook from "../../img/facebook_ico.svg";
import instagram from "../../img/instagram_ico.svg";
import css from "./Footer.module.scss";

const Footer = () => (
  <footer className={css.footer}>
    <img src={logoSmall} alt="Interia" className={css.logoSmall} />
    <div className={`${css.contacts} ${css.container}`}>
      <div className={`${css.address} ${css.container}`}>
        <img src={location} alt="location" className={css.icon} />
        <address>
          43 Miriam St, Daly City
          <br />
          CA, 94014, United States
        </address>
      </div>
      <div className={`${css.phone} ${css.container}`}>
        <img src={phone} alt="phone" className={css.icon} />
        <a href="tel:+4317104996">+ 43-1-7104996</a>
      </div>
    </div>
    <div className={`${css.social} ${css.container}`}>
      <img src={youtube} alt="youtube" className={css.youtube} />
      <div className={css.dot}></div>
      <img src={facebook} alt="facebook" className={css.facebook} />
      <div className={css.dot}></div>
      <img src={instagram} alt="instagram" className={css.instagram} />
    </div>
  </footer>
);

export default Footer;

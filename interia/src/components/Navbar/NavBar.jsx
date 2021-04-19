import css from "./NavBar.module.scss";
import logoBig from "../../img/logo_big.svg";
import menuIco from "../../img/menu_icon.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <header className={css.bgHeader}>
      <img src={logoBig} alt="Interia" className={css.logoBig} />
      <img src={menuIco} className={css.menuIcon} id="hamburger"></img>
      <nav>
        <ul className={css.menu}>
          <li>
            <NavLink to="/about">
              about <div className={css.underline}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={css.menuActive}>
              services <div className={css.underline}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              projects <div className={css.underline}></div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.languageSel} id="language-sel">
        <a href="#" id="en" className={css.langActive}>
          en
        </a>
        <a href="#" id="ru">
          ru
        </a>
      </div>
    </header>
);

export default NavBar;

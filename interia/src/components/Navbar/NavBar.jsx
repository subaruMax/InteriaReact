import css from "./NavBar.module.scss";
import logoBig from "../../img/logo_big.svg";
import menuIco from "../../img/menu_icon.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const NavBar = () => {
  const [menu, openCloseMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const toggleMenu = () => {
    if (menu) openCloseMenu(false);
    else openCloseMenu(true);
  };

  useEffect(() => {
    if (windowWidth > 875) openCloseMenu(false);
  });

  const closeMenuOnClick = (e) => {
    if (e.target.tagName == "A" && menu) openCloseMenu(false);
  };

  const Nav = (
    <nav onClick={closeMenuOnClick}>
      <ul className={menu ? css.burgerMenu : css.menu}>
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
  );

  return (
    <div>
      <header className={menu ? `${css.bgHeader} ${css.opened}` : css.bgHeader}>
        <img src={logoBig} alt="Interia" className={css.logoBig} />
        <img src={menuIco} className={css.menuIcon} onClick={toggleMenu}></img>
        {menu ? null : Nav}
        <div className={css.languageSel}>
          <a href="#" className={css.langActive}>
            en
          </a>
          <a href="#">ru</a>
        </div>
      </header>
      {menu ? Nav : null}
    </div>
  );
};

export default NavBar;

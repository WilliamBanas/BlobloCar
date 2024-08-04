import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icon-menu.png";
import close from "../../assets/icon-close.png";
import search from "../../assets/icon-search.png";
import logoWithText from "../../assets/logoFont.png";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-container">
          <NavLink to="/" onClick={() => (sidebar ? setSidebar(false) : null)}>
            <img
              className="left-container__logo-main"
              src={logoWithText}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="right-container">
          <img className="right-container__logo-search" src={search} alt="" />
          {sidebar ? (
            <img
              className="right-container__logo-menu"
              src={close}
              alt=""
              onClick={handleSidebar}
            />
          ) : (
            <img
              className="right-container__logo-menu"
              src={menu}
              alt=""
              onClick={handleSidebar}
            />
          )}
        </div>
      </nav>
      {sidebar ? (
        <div className="sidebar">
          <ul className="sidebar__list">
            <h3 className="sidebar__title">Trajet</h3>
            <li className="sidebar__item">
              <NavLink className="sidebar__link" to="#">
                Nouveau trajet
              </NavLink>
            </li>
          </ul>
          <div className="sidebar__divider">
            <hr />
          </div>
          <ul className="sidebar__list">
            <h3 className="sidebar__title">Compte</h3>
            <li className="sidebar__item">
              <NavLink
                className="sidebar__link"
                to="/login"
                onClick={() => (sidebar ? setSidebar(false) : null)}
              >
                Connexion
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink className="sidebar__link" to="#">
                Inscription
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

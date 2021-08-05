import React from "react";
import "./styles.scss";
import Logo from "../../public/assets/constellations.svg";
import Facebook from "../../public/assets/facebook-brands.svg";
import LinkedIn from "../../public/assets/linkedin-brands.svg";
import Instagram from "../../public/assets/instagram.svg";

export const Navbar = () => {
  const toggleLogo = (event) => {
    const target = event.target;
    console.log(target, "HOVERING");
  };

  return (
    <div className="main-navbar-wrapper">
      <div className="navbar-wrapper">
        {/* Icon Element */}
        <div className="icon-holder">
          <a className="link-brand" href="/">
            <img className="nebula-logo" src={Logo} alt="logo" />
            <label className="nebula-logo-letters">Nebulab</label>
          </a>
        </div>

        {/* List Element */}
        <div className="list-element-wrapper">
          <ul className="list-holder">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Nebula</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Portafolio</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <div className="social-media-holder">
          <img
            onMouseOver={(event) => toggleLogo(event)}
            className="nebula-social-icon"
            src={Facebook}
            alt="logo"
          />
          <img className="nebula-social-icon" src={LinkedIn} alt="logo" />
          <img className="nebula-social-icon" src={Instagram} alt="logo" />
        </div>
      </div>
    </div>
  );
};

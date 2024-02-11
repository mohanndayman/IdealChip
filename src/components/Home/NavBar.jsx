import React, { useState } from "react";
import "../../styles/navbar.css";
import logo from "../../images/logo.webp";
import { NavLink } from "react-router-dom";
import logoName from "../../images/loganame.webp";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons/Icons";

function NavBar() {
  const [popUp, setPopup] = useState(false);
  const [click, setClick] = useState(false);

  const handlePopUp = () => {
    setPopup(true);
  };
  const handleClick = () => setClick(!click);
  return (
    <>
      {popUp && (
        <>
          <div className="popUpContactUs">
            <section id="contact">
              <h1 class="section-header">Contact</h1>

              <div class="contact-wrapper">
                <form id="contact-form" class="form-horizontal" role="form">
                  <div class="form-group">
                    <div class="col-sm-12">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="NAME"
                        name="name"
                        value=""
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-12">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="EMAIL"
                        name="email"
                        value=""
                        required
                      />
                    </div>
                  </div>

                  <textarea
                    class="form-control"
                    rows="10"
                    placeholder="MESSAGE"
                    name="message"
                    required
                  ></textarea>

                  <button
                    class="btn btn-primary send-button"
                    id="submit"
                    type="submit"
                    value="SEND"
                  >
                    <div class="alt-send-button">
                      <i class="fa fa-paper-plane"></i>
                      <span class="send-text">SEND</span>
                    </div>
                  </button>
                </form>

                <div class="direct-contact-container">
                  <ul class="contact-list">
                    <li class="list-item">
                      <i class="fa fa-map-marker fa-2x">
                        <span class="contact-text place">City, State</span>
                      </i>
                    </li>

                    <li class="list-item">
                      <i class="fa fa-phone fa-2x">
                        <span class="contact-text phone">
                          <a href="tel:1-212-555-5555" title="Give me a call">
                            (212) 555-2368
                          </a>
                        </span>
                      </i>
                    </li>

                    <li class="list-item">
                      <i class="fa fa-envelope fa-2x">
                        <span class="contact-text gmail">
                          <a href="mailto:#" title="Send me an email">
                            hitmeup@gmail.com
                          </a>
                        </span>
                      </i>
                    </li>
                  </ul>

                  <hr />
                  <ul class="social-media-list">
                    <li>
                      <a href="#" target="_blank" class="contact-icon">
                        <i class="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="contact-icon">
                        <i class="fa fa-codepen" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="contact-icon">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="contact-icon">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <hr />

                  <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            <span>
              <img src={logo} alt="Company Logo" />
            </span>
            {/* <i className="fas fa-code"></i> */}

            <img
              src={logoName}
              style={{ width: "30%" }}
              id="imgAndName"
              alt="Company name and logo"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handlePopUp}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

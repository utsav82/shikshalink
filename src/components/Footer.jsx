import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
function handleclick() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
const FB = () => {
  window.open("https://www.facebook.com/", "_blank");
};
const IG = () => {
  window.open(
    "https://instagram.com/shikshalink?igshid=ZDdkNTZiNTM=",
    "_blank"
  );
};
const LI = () => {
  window.open("https://www.linkedin.com/company/shikshalink/", "_blank");
};
const YT = () => {
  window.open("https://youtube.com/@Shikshalink", "_blank");
};

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button onClick={handleclick}>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>ShikshaLink</h3>
            <p>Own your expectation with Shikshalink</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Follow us to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" onClick={FB} />
              </div>
              <div>
                <FaLinkedin className="icons" onClick={LI} />
              </div>
              <div>
                <FaYoutube className="icons" onClick={YT} />
              </div>
              <div>
                <FaInstagram className="icons" onClick={IG} />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <a href="tel:+91 81123 74987"> +91 81123 74987</a>
            {/* <h3>+91 81123 74987</h3> */}
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Shikshalink. All Rights Reserved</p>
            <div>
              <NavLink to="/terms">TERMS & CONDITIONS</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    a {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 1.7rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;

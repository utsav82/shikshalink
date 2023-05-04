import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import SubHeroSection from "./SubHero";
import myGifImage from "../assets/hero-gif.gif";



const HeroSection = () => {
 

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">Shikshalink</h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti qui facilis, repellat labore quos. Cupiditate eveniet vitae delectus minima voluptates accusantium autem id nihil dicta nemo? Consequatur, accusamus quidem.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Contact</NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={myGifImage} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>

     

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: auto;

  background-color: #f8f8f8;
   padding-top:10rem;
   padding-bottom:10rem;
  height: 100%;
  width: 100%;
  position: relative;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
    border-radius: 20px;
    // margin-left: 100px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;

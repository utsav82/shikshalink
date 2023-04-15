import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const SubHeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        {/* for image */}
        <div className="section-subhero-image">
          <picture>
            <img src="https://i.gifer.com/4E68.gif" alt="hero image" className="subhero-img" />
          </picture>
        </div>

        <div className="section-subhero-data">
          <h2 className="subhero-heading">What we do?</h2>
          <p className="subhero-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti qui facilis, repellat labore quos. Cupiditate eveniet vitae delectus minima voluptates accusantium autem id nihil dicta nemo? Consequatur, accusamus quidem.
          </p>
          <Button className="btn hireme-btn">
            <a href="#services">Learn More</a>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 25rem 0;

  color: #03045E;
  
  .section-subhero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .subhero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .subhero-heading {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  .subhero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-subhero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem; /* Add a margin to separate the image from the text */
  }

  picture {
    text-align: center;
  }

  .subhero-img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3.6rem;
      flex-direction: column;
    }

    .section-subhero-image {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

export default SubHeroSection;

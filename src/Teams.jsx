import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Team Members</h2>
      <div className="container grid grid-three-column">
        <Card
          title="Founder"
          image="https://media.istockphoto.com/id/618760716/photo/successful-senior-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=xKZxbmX7hgzqUtpb21Iwkeizetlzdzuh2JSR8rovacU="
        ></Card>
        <Card
          title="Co-Founder"
          image="https://media.istockphoto.com/id/608531376/photo/portrait-of-young-asian-entrepreneur.jpg?s=612x612&w=0&k=20&c=fndjZkJjQOG31Ngg6a0Bjls7QfPDm-3pfTrJ-JArPe8="
        ></Card>
        <Card
          title="Co-Founder"
          image="https://media.istockphoto.com/id/597238842/photo/young-asian-businessman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=DIP6-XivVsYyTj5fF44k843K20dxOmSRWsOEg6CZl3w="
        ></Card>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;

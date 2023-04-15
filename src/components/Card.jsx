import React from "react";
import styled from "styled-components";

const ServiceCardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ServiceCardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ServiceCardDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

function ServiceCard(props) {
  return (
    <ServiceCardWrapper>
      <ServiceCardImage src={props.image} alt={props.title} />
      <ServiceCardTitle>{props.title}</ServiceCardTitle>
      <ServiceCardDescription>{props.description}</ServiceCardDescription>
    </ServiceCardWrapper>
  );
}

export default ServiceCard;

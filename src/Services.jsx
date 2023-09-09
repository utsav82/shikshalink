// import React from "react";
// import styled from "styled-components";
// import Card from "./components/Card";
// import { NavLink } from "react-router-dom";
// import { Button } from "./styles/Button";

// const Services = () => {
//   return (
//     <Wrapper className="section">
//       <h2 className="common-heading">Our Services</h2>
//       <div className="container grid grid-three-column">
//         <Card
//           title="Service"
//           image="https://media.istockphoto.com/id/1218737747/vector/learning-online-e-learning-video-call-chat-with-class-distance-education.jpg?s=612x612&w=is&k=20&c=m8IxACfRG-APe8kHKfVKxwim3f3JouCLfPU3pvxhYto="
//         ></Card>
//         <Card
//           title="Service"
//           image="https://media.istockphoto.com/id/1218737747/vector/learning-online-e-learning-video-call-chat-with-class-distance-education.jpg?s=612x612&w=is&k=20&c=m8IxACfRG-APe8kHKfVKxwim3f3JouCLfPU3pvxhYto="
//         ></Card>
//         <Card
//           title="Service"
//           image="https://media.istockphoto.com/id/1218737747/vector/learning-online-e-learning-video-call-chat-with-class-distance-education.jpg?s=612x612&w=is&k=20&c=m8IxACfRG-APe8kHKfVKxwim3f3JouCLfPU3pvxhYto="
//         ></Card>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .container {
//     max-width: 120rem;
//   }

//   .card {
//     border: 0.1rem solid rgb(170 170 170 / 40%);
//     .card-data {
//       padding: 0 2rem;
//     }

//     h3 {
//       margin: 2rem 0;
//       font-weight: 300;
//       font-size: 2.4rem;
//     }
//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: rgb(98 84 243);
//       font-size: 1.4rem;

//       &:hover {
//         background-color: rgb(98 84 243);
//         color: #fff;
//       }
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .grid-three-column {
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-two-column,
//     .grid-three-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Services;



import React from 'react';
import styled from 'styled-components';

const Service = () => {
  return (
    <OurServicesWrapper>
      <SectionHeading>Our Services</SectionHeading>
      <ServicesList>
        <ServiceItem>
          <ServiceIcon src="images/events.jpeg" alt="Events" />
          <ServiceTitle>Events</ServiceTitle>
          <ServiceDescription>We provide a common platform for the institutions to host events, contests &
Olympiads with effective publicity.</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="images/admission.jpeg" alt="Admission" />
          <ServiceTitle>Admission & schemes</ServiceTitle>
          <ServiceDescription>We have simplified the admission process in various institutions with the proper
inclusion of scholarships & government schemes incentives.</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Sm9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Jobs" />
          <ServiceTitle>Jobs</ServiceTitle>
          <ServiceDescription>We help institutions to hire the right people for the required jobs through our
platform.</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src="images/advertisment.jpeg" alt="Advertisement" />
          <ServiceTitle>Advertisement</ServiceTitle>
          <ServiceDescription>We utilize different advertising channels to increase your inst awareness & credibility
among the target audience.</ServiceDescription>
        </ServiceItem>
      </ServicesList>
    </OurServicesWrapper>
  );
};

const OurServicesWrapper = styled.section`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const SectionHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceItem = styled.div`
  width: 45%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 100%;
  }
`;

const ServiceIcon = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 280px;
  border-radius: 20px;
  height: 200px
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  text-align: center;
`;

export default Service;

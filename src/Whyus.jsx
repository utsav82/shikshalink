// import React from 'react';

// const WhyUsSection = () => {
//   return (
//     <section className="why-us">
//       <h2 className="section-heading">Why ShikshaLink?</h2>
//       <div className="why-us__list">
//         <div className="why-us__item">
//           <h3>Expertise</h3>
//           <p>Our team of experienced React developers has extensive knowledge and skills in building complex web applications using the latest technologies and best practices.</p>
//         </div>
//         <div className="why-us__item">
//           <h3>Collaboration</h3>
//           <p>We work closely with our clients to understand their unique needs and requirements, and tailor our solutions to meet those needs. We also believe in transparency and keep our clients informed every step of the way.</p>
//         </div>
//         <div className="why-us__item">
//           <h3>Quality</h3>
//           <p>We are committed to delivering high-quality work that exceeds our clients' expectations. We take pride in our attention to detail and rigorous testing processes to ensure that our solutions are reliable, scalable, and performant.</p>
//         </div>
//         <div className="why-us__item">
//           <h3>Flexibility</h3>
//           <p>We offer flexible engagement models to meet our clients' needs, whether they require a dedicated team, a fixed-scope project, or an ongoing partnership.</p>
//         </div>
//         <div className="why-us__item">
//           <h3>Customer Satisfaction</h3>
//           <p>Our ultimate goal is to ensure our clients' satisfaction with our services. We strive to build long-term relationships with our clients and have a proven track record of delivering successful projects on time and within budget.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUsSection;

import React from 'react';
import styled from 'styled-components';

const WhyUsSection = () => {
  return (
     
    <WhyUsWrapper>
      <SectionHeading>Why ShikshaLink?</SectionHeading>
      <WhyUsList>
        <WhyUsItem>
          <h3>Expertise</h3>
          <p>Our team of experienced React developers has extensive knowledge and skills in building complex web applications using the latest technologies and best practices.</p>
        </WhyUsItem>
        <WhyUsItem>
          <h3>Collaboration</h3>
          <p>We work closely with our clients to understand their unique needs and requirements, and tailor our solutions to meet those needs. We also believe in transparency and keep our clients informed every step of the way.</p>
        </WhyUsItem>
        <WhyUsItem>
          <h3>Quality</h3>
          <p>We are committed to delivering high-quality work that exceeds our clients' expectations. We take pride in our attention to detail and rigorous testing processes to ensure that our solutions are reliable, scalable, and performant.</p>
        </WhyUsItem>
        <WhyUsItem>
          <h3>Flexibility</h3>
          <p>We offer flexible engagement models to meet our clients' needs, whether they require a dedicated team, a fixed-scope project, or an ongoing partnership.</p>
        </WhyUsItem>
        <WhyUsItem>
          <h3>Customer Satisfaction</h3>
          <p>Our ultimate goal is to ensure our clients' satisfaction with our services. We strive to build long-term relationships with our clients and have a proven track record of delivering successful projects on time and within budget.</p>
        </WhyUsItem>
      </WhyUsList>
    </WhyUsWrapper>
  );
};

const WhyUsWrapper = styled.section`
  padding: 50px 0;
  background-color: #f8f8f8;
`;

const SectionHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const WhyUsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const WhyUsItem = styled.div`
  width: 45%;
  margin-bottom: 40px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export default WhyUsSection;

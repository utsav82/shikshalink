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

// import React from 'react';
// import styled from 'styled-components';

// const WhyUsSection = () => {
//   return (
     
//     <WhyUsWrapper>
//       <SectionHeading>Why ShikshaLink?</SectionHeading>
//       <WhyUsList>
//         <WhyUsItem>
//           <h3>Expertise</h3>
//           <p>Our team of experienced React developers has extensive knowledge and skills in building complex web applications using the latest technologies and best practices.</p>
//         </WhyUsItem>
//         <WhyUsItem>
//           <h3>Collaboration</h3>
//           <p>We work closely with our clients to understand their unique needs and requirements, and tailor our solutions to meet those needs. We also believe in transparency and keep our clients informed every step of the way.</p>
//         </WhyUsItem>
//         <WhyUsItem>
//           <h3>Quality</h3>
//           <p>We are committed to delivering high-quality work that exceeds our clients' expectations. We take pride in our attention to detail and rigorous testing processes to ensure that our solutions are reliable, scalable, and performant.</p>
//         </WhyUsItem>
//         <WhyUsItem>
//           <h3>Flexibility</h3>
//           <p>We offer flexible engagement models to meet our clients' needs, whether they require a dedicated team, a fixed-scope project, or an ongoing partnership.</p>
//         </WhyUsItem>
//         <WhyUsItem>
//           <h3>Customer Satisfaction</h3>
//           <p>Our ultimate goal is to ensure our clients' satisfaction with our services. We strive to build long-term relationships with our clients and have a proven track record of delivering successful projects on time and within budget.</p>
//         </WhyUsItem>
//       </WhyUsList>
//     </WhyUsWrapper>
//   );
// };

// const WhyUsWrapper = styled.section`
//   padding: 50px 0;
//   background-color: #f8f8f8;
// `;

// const SectionHeading = styled.h2`
//   font-size: 36px;
//   font-weight: bold;
//   margin-bottom: 40px;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 32px;
//     margin-bottom: 30px;
//     padding-left: 2.5rem;
//     padding-right: 2.5rem;
//   }
// `;

// const WhyUsList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 992px) {
//     justify-content: center;
//   }
// `;

// const WhyUsItem = styled.div`
//   width: 45%;
//   margin-bottom: 40px;

//   h3 {
//     font-size: 24px;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 16px;
//     line-height: 1.5;
//     color: #666;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     padding-left: 2.5rem;
//     padding-right: 2.5rem;
//   }
// `;

// export default WhyUsSection;


// import React from 'react';

// const styles = {
//   sectionContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     paddingTop: '50px',
//     paddingBottom: '50px',
//   },
//   blockContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '30%',
//     marginBottom: '30px',
//   },
//   title: {
//     fontSize: '32px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
//   pointList: {
//     listStyleType: 'none',
//     textAlign: 'center',
//     margin: 0,
//     padding: 0,
//     fontSize: '18px',
//   },
//   point: {
//     marginBottom: '10px',
//   },
// };

// const WhyUsSection = () => {
//   return (
//     <div style={styles.sectionContainer}>
//       <div style={styles.blockContainer}>
//         <h2 style={styles.title}>For Students</h2>
//         <ul style={styles.pointList}>
//           <li style={styles.point}>Interactive and engaging classes</li>
//           <li style={styles.point}>Experienced and friendly teachers</li>
//           <li style={styles.point}>Flexible schedules to fit your needs</li>
//         </ul>
//       </div>
//       <div style={styles.blockContainer}>
//         <h2 style={styles.title}>For Schools</h2>
//         <ul style={styles.pointList}>
//           <li style={styles.point}>Customized curriculum to match your needs</li>
//           <li style={styles.point}>Proven track record of successful student outcomes</li>
//           <li style={styles.point}>Expert consulting services for education leaders</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WhyUsSection;


// import React from 'react';
// import styled from 'styled-components';

// const WhyUsSection = () => {
//   return (
//     <Container>
//       <Heading>Why ShikshaLink</Heading>
//       <Row>
//         <Col>
//           <Title>For Students</Title>
//           <PointList>
//             <Point>Easily Accessible Contest</Point>
//             <Point>Regional School at one place</Point>
//             <Point> Easy Admission process</Point>
//             <Point>Scholarships Incentives</Point>
//             <Point>Exposure to Events and Olympiads</Point>
//           </PointList>
//         </Col>
//         <Col>
//           <Title>For Schools</Title>
//           <PointList>
//             <Point>Advertisements and Promotions</Point>
//             <Point>Direct Mail Advertisements</Point>
//             <Point>Structured Platform for Events</Point>
//             <Point>Identify Potential Students</Point>
//             <Point>Easy Access to Government Schemes</Point>
//           </PointList>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const Container = styled.div`
// //   margin: 50px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f8f8f8;
// `;

// const Heading = styled.h2`
//   font-size: 48px;
//   text-align: center;
//   margin-bottom: 50px;
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   margin-top: 50px;
//   margin-bottom: 50px;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Col = styled.div`
//   width: 45%;
//   text-align: center;
//   margin: 0 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   @media (max-width: 768px) {
//     width: 100%;
//     margin: 0;
//     margin-bottom: 30px;
//   }
// `;

// const Title = styled.h3`
//   font-size: 36px;
//   margin-bottom: 30px;
// `;

// const PointList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
// `;

// const Point = styled.li`
//   margin-bottom: 20px;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   &:before {
//     content: '•';
//     margin-right: 10px;
//     color: #007bff;
//     font-weight: bold;
//     display: inline-block;
//     width: 1em;
//     text-align: center;
//   }
// `;

// export default WhyUsSection;

import React from 'react';
import styled from 'styled-components';

const MainHeading = styled.h1`
font-size: 36px;
font-weight: bold;
// margin-bottom: 40px;
text-align: center;
background-color: #f8f8f8;
`;

const SectionContainer = styled.section`
  background-color: #f8f8f8;
  padding: 40px 40px;
  
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubSectionContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const SubSectionHeading = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

const TickMark = styled.span`
  font-size: 22px;
  margin-right: 10px;
  color: green;
`;



const WhyShikshaLink = () => {
  return (
    <div>
     <MainHeading>Why ShikshaLink</MainHeading>
      <SectionContainer>
        <SubSectionContainer>
          <SubSectionHeading>For Students</SubSectionHeading>
          <BulletList>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Easily Accessible Contest
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark>Regional Schools at one place
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Easy Admission Process
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark>Flexible Test Process
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark>Scholarships Incentives
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Exposure to Events and Olympiads and many more...
            </BulletListItem>
          </BulletList>
        </SubSectionContainer>
    
        <SubSectionContainer>
          <SubSectionHeading>For Schools</SubSectionHeading>
          <BulletList>
            
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Advertisements and Promotions
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Direct Mail Advertisements
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Structured Platform for Events
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark>Opportunity to Identify Potential Students
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Easy Access to Government Schemes
            </BulletListItem>
            <BulletListItem>
              <TickMark>&#10003;</TickMark> Social Media Marketing and many more...
            </BulletListItem>
          </BulletList>
        </SubSectionContainer>
      </SectionContainer>
    </div>
  );
};

export default WhyShikshaLink;

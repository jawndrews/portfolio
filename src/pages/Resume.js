import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { resumePdf } from "../assets/dynamicFiles";

const ResumeContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const ResumeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ResumeHeader = styled.div`
  margin-bottom: 4rem;
  padding-top: 3.5rem;
  text-align: center;
`;

const ResumeTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: var(--primary);
  }
`;

const ResumeSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
`;

const ResumeSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  margin: 3rem 0;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: rgba(108, 99, 255, 0.3);

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${(props) => (props.position === "right" ? "50%" : "0")};
    padding-left: ${(props) => (props.position === "right" ? "3rem" : "0")};
    padding-right: ${(props) => (props.position === "left" ? "3rem" : "0")};
    text-align: ${(props) => (props.position === "left" ? "right" : "left")};
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 0;

  @media (max-width: 767px) {
    left: -9px;
  }

  @media (min-width: 768px) {
    left: ${(props) => (props.position === "right" ? "-10px" : "auto")};
    right: ${(props) => (props.position === "left" ? "-10px" : "auto")};
  }
`;

const TimelineContent = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    margin-left: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }
`;

const TimelineDate = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--gray);
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const Resume = () => {
  const experienceItems = [
    {
      date: "May 2024 - Present",
      title: "Information Systems Intern",
      subtitle: "Nissan North America",
      description:
        "Configure Salesforce environments, integrate robust dashboarding for various revenue streams, and support UAT processes",
    },
    {
      date: "Jan 2024 - May 2024",
      title: "Salesforce Intern",
      subtitle: "University of Kentucky - Information Technology Services",
      description:
        "Maintained data integrity through ETL, managed targeted communication campaigns, and administered Salesforce user profiles",
    },
    {
      date: "July 2023 - Jan 2024",
      title: "Information Technology Intern",
      subtitle: "Box Lake Networks",
      description:
        "Implemented a client-facing quoting form, streamlined CRM automation, and developed responsive websites",
    },
    {
      date: "Sep 2022 - Dec 2022",
      title: "Junior Salesforce Analyst",
      subtitle: "Coastal",
      description:
        "Earned Salesforce Administrator certification, documented client business processes, and developed automated customer service workflows presented to company directors",
    },
  ];

  const educationItems = [
    {
      date: "May 2023 - May 2025",
      title: "Master of Science in Information Communication Technology",
      subtitle: "University of Kentucky - School of Information Science",
      description:
        "Pursuing Master's degree with a 4.0 GPA, focusing on advanced data analytics and user-centered design",
    },
    {
      date: "2019",
      title: "Bachelor of Science in Information Communication Technology",
      subtitle: "University of Kentucky - School of Information Science",
      description:
        "Graduated with a major GPA of 3.8 and a cumulative GPA of 3.65, minored in Computer Science, and held leadership roles in campus organizations",
    },
    {
      date: "Dec 2022",
      title: "Salesforce Certified Administrator",
      subtitle: "Certification",
      description:
        "Demonstrating expertise in configuring the Salesforce platform",
    },
  ];

  return (
    <ResumeContainer>
      <FloatingShapes />

      <ResumeContent>
        <ResumeHeader>
          <ResumeTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My <span>Resume</span>
          </ResumeTitle>
          <ResumeSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            A summary of my professional experience, education, and
            certifications
          </ResumeSubtitle>

          <DownloadButton
            href={resumePdf.resume}
            download
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.1, delay: 0 } }}
          >
            <i className="fas fa-download"></i> Download Resume
          </DownloadButton>
        </ResumeHeader>

        <ResumeSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Experience
          </SectionTitle>

          <TimelineContainer>
            {experienceItems.map((item, index) => (
              <TimelineItem
                key={index}
                position={index % 2 === 0 ? "left" : "right"}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TimelineDot position={index % 2 === 0 ? "left" : "right"} />
                <TimelineContent
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.1, delay: 0 },
                  }}
                >
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </ResumeSection>

        <ResumeSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Education
          </SectionTitle>

          <TimelineContainer>
            {educationItems.map((item, index) => (
              <TimelineItem
                key={index}
                position={index % 2 === 0 ? "left" : "right"}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TimelineDot position={index % 2 === 0 ? "left" : "right"} />
                <TimelineContent
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.1, delay: 0 },
                  }}
                >
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </ResumeSection>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;

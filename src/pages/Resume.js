import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { resumePdf, companyLogos } from "../assets/dynamicFiles";

// Enhanced styled components with moderate improvements
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
  line-height: 1.6;
`;

const ResumeSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
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
  top: 52px; /* Adjust for vertical placement */
  background-color: ${(props) =>
    props.isCurrent ? "var(--primary)" : "transparent"};
  border: 2px solid var(--primary);
  box-shadow: ${(props) =>
    props.isCurrent ? "0 0 10px rgba(108, 99, 255, 0.4)" : "none"};
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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

/**
 * TimelineHeader: on desktop uses row ordering (date vs. logo);
 * on mobile it stays as row with a small gap.
 */
const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    flex-direction: row;
    gap: 0.75rem;
    justify-content: flex-start;
  }
`;

/**
 * DateWrapper: desktop order based on side; mobile always after logo.
 */
const DateWrapper = styled.div`
  order: ${(props) => (props.position === "left" ? 1 : 2)};
  @media (max-width: 767px) {
    order: 2;
    margin-left: auto;
    text-align: right;
  }
`;

/**
 * LogoWrapper: desktop order based on side; mobile always first.
 */
const LogoWrapper = styled.div`
  order: ${(props) => (props.position === "left" ? 2 : 1)};
  @media (max-width: 767px) {
    order: 1;
    margin-right: auto;
  }
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const TimelineDate = styled.div`
  background-color: transparent;
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TimelineSubtitle = styled.h4`
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--gray);
  line-height: 1.5;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-end" : "flex-start"};
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

const SkillTag = styled.span`
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
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
  useEffect(() => {
    document.title = "Jonathan Andrews | Resume";
  }, []);
  // Enhanced data structure with images, current flag, and optional skills
  const experienceItems = [
    {
      date: "May 2024 - Present",
      title: "Information Systems Intern",
      subtitle: "Nissan North America",
      description:
        "Configure Salesforce environments, integrate robust dashboarding for various revenue streams, and support UAT processes.",
      image: companyLogos.nissan,
      current: true,
      skills: ["Salesforce", "Process Automation", "CRM Analytics"],
    },
    {
      date: "Jan 2024 - May 2024",
      title: "Salesforce Intern",
      subtitle: "University of Kentucky IT Services",
      description:
        "Maintained data integrity through ETL, managed targeted communication campaigns, and administered Salesforce user profiles.",
      image: companyLogos.kentucky,
      skills: ["ETL", "Data Loader", "Marketing Cloud"],
    },
    {
      date: "Jul 2023 - Jan 2024",
      title: "IT Intern",
      subtitle: "Box Lake Networks",
      description:
        "Implemented a client-facing quoting form, streamlined CRM automation, and developed responsive websites.",
      image: companyLogos.boxlake,
      skills: ["Salesforce Integration", "WP Web Design"],
    },
    {
      date: "Sep 2022 - Dec 2022",
      title: "Junior Salesforce Analyst",
      subtitle: "Coastal",
      description:
        "Earned Salesforce Administrator certification, documented client business processes, and developed automated customer service workflows presented to company directors.",
      image: companyLogos.coastal,
      skills: [
        "Business Analysis",
        "Documentation",
        "Salesforce Experience Cloud",
      ],
    },
  ];

  const educationItems = [
    {
      date: "Aug 2023 - May 2025",
      title: "M.S., Information Communication Technology",
      subtitle: "University of Kentucky",
      description:
        "Pursuing a Master's degree with a 4.0 GPA, focusing on technology management, advanced data analysis & visualization, and human-computer interaction to drive user-centered design.",
      image: companyLogos.kentucky,
      current: true,
      skills: ["Technology Management", "Data Analytics", "HCI"],
    },
    {
      date: "Aug 2020 - May 2023",
      title: "B.S., Information Communication Technology",
      subtitle: "University of Kentucky",
      description:
        "Graduated with a major GPA of 3.8 and a cumulative GPA of 3.65, minored in Computer Science, and held leadership roles in campus organizations.",
      image: companyLogos.kentucky,
      skills: ["Computer Science", "Data Analytics", "HCI"],
    },
    {
      date: "Dec 2022",
      title: "Salesforce Certified Administrator",
      subtitle: "Certification",
      description:
        "Demonstrating expertise in configuring the Salesforce platform",
      image: companyLogos.salesforce,
      skills: [
        "Process Automation",
        "Platform Configuration",
        "Security Management",
      ],
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

        {/* EXPERIENCE SECTION */}
        <ResumeSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Experience
          </SectionTitle>
          <TimelineContainer>
            {experienceItems.map((item, index) => {
              const position = index % 2 === 0 ? "left" : "right";
              return (
                <TimelineItem
                  key={index}
                  position={position}
                  initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TimelineDot position={position} isCurrent={item.current} />
                  <TimelineContent
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.1, delay: 0 },
                    }}
                  >
                    <TimelineHeader>
                      <DateWrapper position={position}>
                        <TimelineDate>{item.date}</TimelineDate>
                      </DateWrapper>
                      <LogoWrapper position={position}>
                        <CompanyLogo>
                          <img src={item.image} alt={item.subtitle} />
                        </CompanyLogo>
                      </LogoWrapper>
                    </TimelineHeader>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                    <TimelineDescription>
                      {item.description}
                    </TimelineDescription>
                    {/* Skills Tag Section */}
                    {item.skills && item.skills.length > 0 && (
                      <SkillsContainer position={position}>
                        {item.skills.map((skill, i) => (
                          <SkillTag key={i}>{skill}</SkillTag>
                        ))}
                      </SkillsContainer>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </TimelineContainer>
        </ResumeSection>

        {/* EDUCATION SECTION */}
        <ResumeSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Education
          </SectionTitle>
          <TimelineContainer>
            {educationItems.map((item, index) => {
              const position = index % 2 === 0 ? "left" : "right";
              return (
                <TimelineItem
                  key={index}
                  position={position}
                  initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TimelineDot position={position} isCurrent={item.current} />
                  <TimelineContent
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.1, delay: 0 },
                    }}
                  >
                    <TimelineHeader>
                      <DateWrapper position={position}>
                        <TimelineDate>{item.date}</TimelineDate>
                      </DateWrapper>
                      <LogoWrapper position={position}>
                        <CompanyLogo>
                          <img src={item.image} alt={item.subtitle} />
                        </CompanyLogo>
                      </LogoWrapper>
                    </TimelineHeader>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                    <TimelineDescription>
                      {item.description}
                    </TimelineDescription>
                    {/* Skills Tag Section */}
                    {item.skills && item.skills.length > 0 && (
                      <SkillsContainer position={position}>
                        {item.skills.map((skill, i) => (
                          <SkillTag key={i}>{skill}</SkillTag>
                        ))}
                      </SkillsContainer>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </TimelineContainer>
        </ResumeSection>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;

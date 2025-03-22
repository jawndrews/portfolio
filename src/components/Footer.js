import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterHeading = styled.h3`
  color: var(--light);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  color: var(--gray);
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: var(--gray);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #222;
  color: var(--gray);
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 2rem 2rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Jonathan Andrews</FooterHeading>
          <p style={{ color: "var(--gray)", marginBottom: "1rem" }}>
            Salesforce-focused full-stack developer dedicated to practical and
            creative solutions.
          </p>
          <SocialLinks>
            <SocialLink
              href="https://linkedin.com/in/jonathanbandrews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink
              href="https://github.com/jawndrews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink
              href="https://www.salesforce.com/trailblazer/jonandrews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-salesforce"></i>
            </SocialLink>
            <SocialLink href="mailto:jonandrewsmail@gmail.com">
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/resume">Resume</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Skills</FooterHeading>
          <FooterLinks>
            <FooterLink to="/about">Salesforce Administration</FooterLink>
            <FooterLink to="/about">Data Analytics</FooterLink>
            <FooterLink to="/about">Full-Stack Development</FooterLink>
            <FooterLink to="/about">Database Management</FooterLink>
            <FooterLink to="/about">Cloud Technologies</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Jonathan Andrews. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

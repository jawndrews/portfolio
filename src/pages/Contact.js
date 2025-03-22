import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ContactHeader = styled.div`
  margin-bottom: 4rem;
  padding-top: 3.5rem;
  text-align: center;
`;

const ContactTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: var(--primary);
  }
`;

const ContactSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--light);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactInfoItem = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: var(--primary);
  }
`;

const ContactInfoText = styled.p`
  color: var(--gray);
  margin-bottom: 0.5rem;
`;

const ContactInfoLink = styled.a`
  color: var(--primary);
  transition: all 0.3s ease;

  &:hover {
    color: var(--secondary);
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <FloatingShapes />

      <ContactContent>
        <ContactHeader>
          <ContactTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Get In <span>Touch</span>
          </ContactTitle>
          <ContactSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </ContactSubtitle>
        </ContactHeader>

        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput type="text" placeholder="Enter subject" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea placeholder="Enter your message"></FormTextarea>
            </FormGroup>
            <SubmitButton
              whileHover={{ y: -5, transition: { duration: 0.1, delay: 0 } }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-paper-plane"></i> Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            <ContactInfoItem
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.1, delay: 0 } }}
            >
              <ContactInfoTitle>
                <i className="fas fa-envelope"></i> Email
              </ContactInfoTitle>
              <ContactInfoText>Feel free to email me at:</ContactInfoText>
              <ContactInfoLink href="mailto:jonathan@example.com">
                jonandrewsmail@gmail.com
              </ContactInfoLink>
            </ContactInfoItem>

            <ContactInfoItem
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.1, delay: 0 } }}
            >
              <ContactInfoTitle>
                <i className="fas fa-map-marker-alt"></i> Location
              </ContactInfoTitle>
              <ContactInfoText>Based in:</ContactInfoText>
              <ContactInfoText>Kentucky, United States</ContactInfoText>
            </ContactInfoItem>

            <ContactInfoItem
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.1, delay: 0 } }}
            >
              <ContactInfoTitle>
                <i className="fas fa-share-alt"></i> Social
              </ContactInfoTitle>
              <ContactInfoText>
                Connect with me on social media:
              </ContactInfoText>
              <SocialLinks>
                <SocialLink
                  href="https://linkedin.com/in/jonathanbandrews"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#0077B5",
                    transition: { duration: 0.1, delay: 0 },
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </SocialLink>
                <SocialLink
                  href="https://github.com/jawndrews"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#333",
                    transition: { duration: 0.1, delay: 0 },
                  }}
                >
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink
                  href="https://www.salesforce.com/trailblazer/jonandrews"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#00A1E0",
                    transition: { duration: 0.1, delay: 0 },
                  }}
                >
                  <i className="fab fa-salesforce"></i>
                </SocialLink>
              </SocialLinks>
            </ContactInfoItem>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

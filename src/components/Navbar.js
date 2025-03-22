import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
//import ThemeToggle from "./ThemeToggle";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.scrolled ? "rgba(18, 18, 18, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light);
  display: flex;
  align-items: center;
  text-decoration: none;

  span {
    color: var(--primary);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin-left: 2rem;
  color: ${(props) => (props.active ? "var(--primary)" : "var(--light)")};
  font-weight: 500;
  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--light);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: var(--dark);
    padding: 2rem;
    z-index: 200;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--light);
  font-size: 1.2rem;
  margin: 1rem 0;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: var(--primary);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--light);
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 2rem;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = () => {
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavContent>
          <Logo to="/" onClick={handleNavigation}>
            JA<span>.</span>
          </Logo>
          <NavLinks>
            <NavLink
              to="/"
              active={location.pathname === "/" ? 1 : 0}
              onClick={handleNavigation}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              active={location.pathname === "/about" ? 1 : 0}
              onClick={handleNavigation}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              active={location.pathname === "/projects" ? 1 : 0}
              onClick={handleNavigation}
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              active={location.pathname === "/resume" ? 1 : 0}
              onClick={handleNavigation}
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              active={location.pathname === "/contact" ? 1 : 0}
              onClick={handleNavigation}
            >
              Contact
            </NavLink>
          </NavLinks>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </MobileMenuButton>
        </NavContent>
      </Nav>

      <MobileMenu
        initial={{ x: 300 }}
        animate={{ x: mobileMenuOpen ? 0 : 300 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <CloseButton onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </CloseButton>
        <MobileNavLink
          to="/"
          onClick={handleNavigation}
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          to="/about"
          onClick={handleNavigation}
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </MobileNavLink>
        <MobileNavLink
          to="/projects"
          onClick={handleNavigation}
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projects
        </MobileNavLink>
        <MobileNavLink
          to="/resume"
          onClick={handleNavigation}
          className={location.pathname === "/resume" ? "active" : ""}
        >
          Resume
        </MobileNavLink>
        <MobileNavLink
          to="/contact"
          onClick={handleNavigation}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;

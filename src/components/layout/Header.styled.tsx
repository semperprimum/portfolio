import styled from "styled-components";
import { AppContentWrapper, Switch } from "..";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export const Header = () => {
  const context = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(
    () => context?.currentTheme === "dark"
  );

  const toggleTheme = () => {
    context?.toggleTheme();
    setIsDarkMode((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <AppContentWrapper>
        <Logo>bogdankim</Logo>

        <Nav>
          <ul aria-label="navigation">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://github.com/semperprimum">
                <SvgWrapper aria-hidden="true">
                  <FaGithub />
                </SvgWrapper>
              </a>
            </li>
            <li>
              <a href="https://www.frontendmentor.io/profile/semperprimum">
                <SvgWrapper aria-hidden="true">
                  <SiFrontendmentor />
                </SvgWrapper>
              </a>
            </li>
            <li>
              <Switch
                onChange={toggleTheme}
                checked={isDarkMode}
              />
            </li>
          </ul>
        </Nav>
      </AppContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  --vertical-spacing: 0.5rem;
  text-align: center;

  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);

  & > div {
    // override calc(100% - 3rem)
    width: 100%;
  }
`;

const Logo = styled.h1`
  font-family: var(--ff-accent);
  margin-bottom: var(--vertical-spacing);
  line-height: auto;
`;

const Nav = styled.nav`
  display: grid;
  gap: var(--vertical-spacing);

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

const SvgWrapper = styled.div`
  display: block;
  font-size: 1.5rem;
`;

import styled, { css } from "styled-components";
import { AppContentWrapper, Switch } from "..";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";

interface HeaderProps {
  header: boolean;
  navLabel: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const themeContext = useTheme();

  return (
    <HeaderWrapper $header={props.header}>
      <AppContentWrapper>
        <Logo>bogdankim</Logo>

        <Nav aria-label={props.navLabel}>
          <ul aria-label="navigation">
            <li>
              <a href="#about">
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a aria-label="github" href="https://github.com/semperprimum">
                <SvgWrapper aria-hidden="true">
                  <FaGithub />
                </SvgWrapper>
              </a>
            </li>
            <li>
              <a
                aria-label="frontend mentor"
                href="https://www.frontendmentor.io/profile/semperprimum"
              >
                <SvgWrapper aria-hidden="true">
                  <SiFrontendmentor />
                </SvgWrapper>
              </a>
            </li>
            <li>
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/bogdan-kim/"
              >
                <SvgWrapper aria-hidden="true">
                  <FaLinkedin />
                </SvgWrapper>
              </a>
            </li>
            <li>
              <Switch
                onChange={themeContext?.toggleTheme ?? (() => { })}
                checked={themeContext?.currentTheme === "dark"}
              />
            </li>
          </ul>
        </Nav>
      </AppContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ $header: boolean }>`
  --vertical-spacing: 0.5rem;
  text-align: center;

  ${(props) =>
    props.$header &&
    css`
      @media only screen and (max-width: 48em) {
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);

        & > div {
          // override calc(100% - 3rem)
          width: 100%;
        }
      }
    `}

  @media only screen and (min-width: 48em) {
    padding-block: 1rem;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Logo = styled.h1`
  font-size: var(--fs-logo);
  font-family: var(--ff-accent);
  margin-bottom: var(--vertical-spacing);
  line-height: auto;
  flex-basis: 1;
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

    a > :not(div) {
      @media only screen and (min-width: 69.375em) {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 150ms 100ms ease;
        }

        &:hover {
          &::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 48em) {
    display: flex;
    gap: 2rem;
  }
`;

const SvgWrapper = styled.div`
  display: block;
  font-size: 1.5rem;
`;

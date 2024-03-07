import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <SwitchStyled>
        <IoSunnyOutline />
        <FaMoon />
      </SwitchStyled>
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;

  width: 3.1875rem;
  height: 1.9375rem;
`;

const SwitchInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${(props) => props.theme.button};

    &::before {
      transform: translateX(1.25rem);
    }
  }
`;

const SwitchStyled = styled.span`
  position: absolute;
  inset: 0;
  background-color: #78788029;
  border-radius: 100vmax;
  transition: background-color 150ms ease;

  &::before {
    content: "";
    position: absolute;
    width: 1.6875rem;
    height: 1.6875rem;
    background-color: #fff;
    left: 0.125rem;
    bottom: 0.125rem;
    border-radius: 100%;
    transition: transform 150ms ease;

    box-shadow: 0 3px 8px 0 #00000026, 0 3px 1px 0 #0000000f;
    z-index: 50;
  }

  & > svg {
    position: absolute;
    font-size: 0.875rem;

    &:first-child {
      left: 0.375rem;
      top: 50%;
      transform: translateY(-50%);
      color: #5ac8fa80;
    }

    &:last-child {
      right: 0.375rem;
      top: 50%;
      transform: translateY(-50%);
      color: #7878804d;
    }
  }
`;

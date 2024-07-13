import { motion } from "framer-motion";
import styled from "styled-components";

export const Heading = styled(motion.h2)`
  font-family: var(--ff-accent);
  font-size: var(--fs-300);
  max-width: fit-content;

  background: -webkit-linear-gradient(${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

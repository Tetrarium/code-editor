import { FC, ReactNode } from "react";

import { Box, styled } from "@mui/material";

interface SectionProps {
  children: [
    ReactNode,
    ReactNode,
  ];
}

const Container = styled(Box)(({ theme }) => ({
  border: '1px solid #fff',
  borderRadius: theme.spacing(1),
  flexGrow: 1,
  overflow: "hidden",
  backgroundColor: '#262626',
  height: '100%',
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: '#333333',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Body = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Section: FC<SectionProps> = ({ children }) => {
  const [title, body] = children;

  return (
    <Container>
      <Header>{title}</Header>
      <Body>{body}</Body>
    </Container>
  );
};

export default Section;
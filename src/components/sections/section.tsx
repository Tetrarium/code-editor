import { FC, ReactNode } from "react";

import { Box, BoxProps, styled, Typography, TypographyProps } from "@mui/material";

interface SectionProps {
  children: [
    ReactNode,
    ReactNode,
  ];
}

const Container = styled(Box)(({ theme }) => ({
  border: '1px solid #fff',
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  backgroundColor: '#262626',
}));

const Header = styled(Typography)<TypographyProps>(({ theme }) => ({
  backgroundColor: '#333333',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Body = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Section: FC<SectionProps & BoxProps> = ({ children, ...other }) => {
  const [title, body] = children;

  return (
    <Container {...other}>
      <Header component={'h3'}>{title}</Header>
      <Body>{body}</Body>
    </Container>
  );
};

export default Section;
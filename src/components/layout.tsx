import { FC, PropsWithChildren } from "react";

import { Container } from "@mui/material";

import Header from "./header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth={false}>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
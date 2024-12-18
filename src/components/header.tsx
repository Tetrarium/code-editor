import { FC } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TerminalIcon from "@mui/icons-material/Terminal";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <Box >
      <AppBar position="static" sx={{ borderRadius: 1, my: 1, boxShadow: 2 }}>
        <Toolbar>
          <TerminalIcon fontSize="large" />
          <Typography variant="h5" sx={{ flexGrow: 1, mx: 2 }}>Amazing Code Editor</Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      background: "rgba(0, 0, 0, 0.64)",

      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      border: "none",
    }}
  >
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          mr: 2,
          display: { sm: "none" },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 600,
            color: "#fff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            fontSize: "1.25rem",
          }}
        >
          Cloud Cache
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;

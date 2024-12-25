import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  {
    text: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => (
  <>
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          width: 240,
          height: "100vh",
          background: "linear-gradient(135deg, #2b2b2b, #1f1f1f)",
          color: "#e0e0e0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: 240,
          height: "100vh",
          background: "linear-gradient(135deg, #2b2b2b, #1f1f1f)",
          color: "#e0e0e0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
      open
    >
      <SidebarContent />
    </Drawer>
  </>
);

const SidebarContent = () => (
  <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
    <Toolbar>
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
        }}
      >
        Cloud Cache
      </Typography>
    </Toolbar>
    <List sx={{ flex: 1 }}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={Link}
          to={item.path}
          sx={{
            "&:hover": {
              backgroundColor: "#333333",

              color: "#26c6da",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            },
            margin: "5px 10px",
            borderRadius: "8px",
          }}
        >
          <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{ color: "#ffffff", fontWeight: "bold" }}
          />
        </ListItem>
      ))}
    </List>
    <Box sx={{ textAlign: "center", padding: "10px 0", color: "#fff" }}>
      <Typography variant="body2">© 2024 My App</Typography>
    </Box>
  </Box>
);

export default Sidebar;

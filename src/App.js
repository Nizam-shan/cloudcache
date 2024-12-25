import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - 240px)` },
            marginLeft: { xs: 0, sm: "240px" },
            transition: "margin-left 0.3s ease-in-out",
          }}
        >
          <CssBaseline />

          <Header handleDrawerToggle={handleDrawerToggle} />

          <Box sx={{ padding: 3, marginTop: "64px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/notifications"
                element={<div>Notifications Page app</div>}
              />
              <Route path="/profile" element={<div>Profile Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;

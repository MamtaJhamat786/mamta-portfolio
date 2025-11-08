'use client';

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItemButton,
  useMediaQuery,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const sections = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <PersonIcon /> },
  { id: 'experience', label: 'Experience', icon: <WorkIcon /> },
  { id: 'contact', label: 'Contact', icon: <MailIcon /> },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 999,
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 2,
        }}
      >
        {/* Left Side */}
        <Toolbar sx={{ display: "flex", gap: 2, padding: {xs: 0} }}>
          {isMobile ? (
            <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            sections.map((sec) => (
              <Button
                key={sec.id}
                color="inherit"
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.label}
              </Button>
            ))
          )}
        </Toolbar>

        {/* Right Side - Social Icons */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            sx={{ color: "common.white" }}
            component="a"
            href="https://www.facebook.com/kaur.mamta.96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            sx={{ color: "common.white" }}
            component="a"
            href="https://www.linkedin.com/in/mamta-%E2%80%94-16a510170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            sx={{ color: "common.white" }}
            component="a"
            href="https://github.com/MamtaJhamat786"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "primary.light",
            color: "white",
            paddingTop: 2,
          },
        }}
        anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {sections.map((sec) => (
            <ListItemButton
              key={sec.id}
              onClick={() => {
                scrollToSection(sec.id);
                setOpen(false);
              }}
            >
              <ListItemIcon sx={{ color: 'common.white' }}>
                {sec.icon}
              </ListItemIcon>
              <ListItemText primary={sec.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

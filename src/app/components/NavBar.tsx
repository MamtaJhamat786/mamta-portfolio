'use client';

import { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SocialIcon } from '@/app/components/SocialIcon';
import { HOME_SECTIONS, SOCIAL_INFO } from '@/constants/homeText';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 999,
          backgroundColor: 'primary.dark',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingInline: 2,
        }}
      >
        {/* Left Side */}
        <Toolbar sx={{ display: 'flex', gap: 2, padding: { xs: 0 } }}>
          {isMobile ? (
            <IconButton sx={{ color: 'white' }} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            HOME_SECTIONS.map((sec) => (
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
          {SOCIAL_INFO.map((info, index) => (
            <SocialIcon key={index} href={info.href} icon={info.icon} />
          ))}
        </Box>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: 'primary.light',
            color: 'common.white'
          },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton
          sx={{ color: 'common.white', justifyContent: 'end' }}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ width: 200 }}>
          {HOME_SECTIONS.map((sec) => (
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

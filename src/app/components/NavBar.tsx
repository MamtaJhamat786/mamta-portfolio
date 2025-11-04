'use client';

import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'experience', label: 'Experience' },
];

export default function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        zIndex: 999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        {sections.map((sec) => (
          <Button
            key={sec.id}
            color="inherit"
            onClick={() => scrollToSection(sec.id)}
          >
            {sec.label}
          </Button>
        ))}
      </Toolbar>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton
          sx={{ color: 'common.white' }}
          component="a"
          href="https://www.facebook.com/kaur.mamta.96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          sx={{ color: 'common.white' }}
          href="https://www.linkedin.com/in/mamta-%E2%80%94-16a510170/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          sx={{ color: 'common.white' }}
          href="https://github.com/MamtaJhamat786"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Box>
    </AppBar>
  );
}

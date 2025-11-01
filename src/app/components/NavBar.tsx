'use client';

import { AppBar, Toolbar, Button } from '@mui/material';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 999 }}>
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
    </AppBar>
  );
}

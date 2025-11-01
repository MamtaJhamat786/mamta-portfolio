'use client';

import { Box } from '@mui/material';

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <Box
      id={id}
      sx={{
        height: '100vh',
        top: 'calc(100vh - 64px)',
        p: 8,
        bgcolor: 'color.white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <>
        {children}
      </>

    </Box>
  );
}

'use client';

import { Box } from '@mui/material';
import React from 'react';

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <Box
      id={id}
      sx={{
        backgroundColor: 'color.white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <>{children}</>
    </Box>
  );
}

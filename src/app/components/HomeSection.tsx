'use client';

import React from 'react';
import background from '../../../public/images/background.png';
import { Box, Typography } from '@mui/material';
import { SKILLS } from '@/constants/skills';
import { HOME_TEXTS } from '@/constants/homeText';

export default function HomeSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: {sm: '100%', md: '100vh' },
        width: '100%',
        alignItems: 'center',
        paddingTop: { xs: '3.5rem', md: '4rem' },
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        display="flex"
        height="100%"
        padding="0.75rem"
        gap="1rem"
        flexDirection="column"
        sx={{
          width: { sm: '100%', md: '70%'},
          justifyContent: { sm: 'center' },
        }}
      >
        <Typography
          variant="h3"
          color="common.white"
          sx={{ fontWeight: 'bold' }}
        >
          {HOME_TEXTS.title}
        </Typography>
        <Typography
          color="common.white"
          variant="body1"
          sx={{ fontWeight: 400, lineHeight: '1.875rem' }}
        >
          {HOME_TEXTS.description}
        </Typography>

        <Typography
          color="common.white"
          variant="body2"
          sx={{ fontWeight: 'bold', lineHeight: '1.875rem' }}
        >
          {HOME_TEXTS.technologiesLabel}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {SKILLS.map((skill) => (
            <Box
              sx={{
                backgroundColor: 'warning.light',
                height: '2.125rem',
                justifyContent: 'center',
                color: 'common.black',
                borderRadius: '1.25rem',
                padding: '0.625rem',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'noWrap',
              }}
              key={skill}
            >
              {skill}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography color="common.white">{HOME_TEXTS.email}</Typography>
          <Typography color="common.white">{HOME_TEXTS.phone}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

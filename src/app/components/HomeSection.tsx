'use client';

import React from 'react';
import Image from 'next/image';
import blue from '../../../public/images/portfolio_img.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import { SKILLS } from '@/constants/skills';
import { HOME_TEXTS } from '@/constants/homeText';

export default function HomeSection() {
  const isNotSmallScreen = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: !isNotSmallScreen ? 'column-reverse' : 'row',
        alignItems: 'center',
        paddingTop: '1.5rem',
        gap: '2.5rem',
      }}
    >
      <Image src={blue} alt="my_img" height={600}></Image>
      <Box display="flex" gap='1rem' flexDirection='column'>
        <Typography variant="h6" color='common.black'>{HOME_TEXTS.subtitle} </Typography>
        <Typography variant="h3" color='common.black'>{HOME_TEXTS.title}</Typography>
        <Typography color='common.black' sx={{ fontSize: '1.125rem', fontWeight: 400, lineHeight: '1.875rem' }}>
          {HOME_TEXTS.description}
        </Typography>

        <Typography color='common.black' sx={{ fontSize: '1.125rem', fontWeight: 400, lineHeight: '1.875rem' }}>
          {HOME_TEXTS.technologiesLabel}
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {SKILLS.map((skill) => (
            <Box
              sx={{
              backgroundColor: 'warning.light',
              color: 'common.black',
              borderRadius: '15px',
              padding: '10px',
              display: 'flex',
              alignItens: 'center',
              whiteSpace: 'noWrap',
            }}
            key={skill}
            >
              {skill}
            </Box>
          ))}
        </Box>
        <Box
          style={{
            marginTop: '1.875rem',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1.875rem',
          }}
        >
          <Typography color='common.black'>{HOME_TEXTS.email}</Typography>
          <Typography color='common.black'>{HOME_TEXTS.phone}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

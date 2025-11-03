import { Box, Typography } from '@mui/material';
import { ABOUT_TEXTS } from '@/constants/aboutText';

export function AboutSection() {
  return (
    <Box
      sx={{
        margin: 'auto',
        width: '60%',
        marginTop: '2.5rem',
        lineHeight: '1.875rem',
      }}
    >
      <Typography variant='h3' color="common.black">
        {ABOUT_TEXTS.aboutTitle}
      </Typography>
      {ABOUT_TEXTS.profileIntro.split('\n\n').map((paragraph, index) => (
        <Typography
          color="common.black"
          key={index}
          variant="body1"
          textAlign="justify"
          lineHeight={1.7}
          marginBottom={2}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
}

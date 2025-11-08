import { Box, Typography } from '@mui/material';
import { ABOUT_TEXTS } from '@/constants/aboutText';

export function AboutSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        gap: '1rem',
        width: '100%',
        flex: 1,
        marginTop: '2rem',
        padding: '3rem',
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h3" color="common.black">
          {ABOUT_TEXTS.aboutTitle}
        </Typography>
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
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
    </Box>
  );
}

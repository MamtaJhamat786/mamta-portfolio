import { Box, Typography } from '@mui/material';
import { ABOUT_TEXTS } from '@/constants/aboutText';
import MotionTypography from '@/app/components/MotionTypography';


export function AboutSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: '100%', md: '100vh' },
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        marginTop: '2rem',
        padding: '3rem',
      }}
    >
      <MotionTypography
        flex={1}
        variant="h3"
        color="common.black"
      >
        {ABOUT_TEXTS.aboutTitle}
      </MotionTypography>
      <Box sx={{ minWidth: 0, flex: 1 }}>
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

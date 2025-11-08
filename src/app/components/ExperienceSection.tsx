import { Box, Typography } from '@mui/material';
import { EXPERIENCE_TEXTS } from '@/constants/experienceText';
import wavePattern from '../../../public/images/wavePattern.jpg';
import { ExperienceCard } from '@/app/components/ExperienceCard';

export function ExperienceSection() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        padding: '2rem',
        marginTop: '3rem',
        backgroundImage: `url(${wavePattern.src})`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: 'primary.dark',
        }}
      >
        <Typography
          color="commin.white"
          variant="h4"
          sx={{ fontWeight: 'bold' }}
        >
          {EXPERIENCE_TEXTS.mainTitle}
        </Typography>
      </Box>
      <ExperienceCard
        title={EXPERIENCE_TEXTS.entainExperience.title}
        bulletPoints={EXPERIENCE_TEXTS.entainExperience.bulletPoints}
      />
      <ExperienceCard
        title={EXPERIENCE_TEXTS.erplyExperience.title}
        bulletPoints={EXPERIENCE_TEXTS.erplyExperience.bulletPoints}
      />
      <ExperienceCard
        title={EXPERIENCE_TEXTS.kuehneNagelExperience.title}
        bulletPoints={EXPERIENCE_TEXTS.kuehneNagelExperience.bulletPoints}
      />
      <ExperienceCard
        title={EXPERIENCE_TEXTS.residencyHubExperience.title}
        bulletPoints={EXPERIENCE_TEXTS.residencyHubExperience.bulletPoints}
      />
    </Box>
  );
}

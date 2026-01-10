import { Box } from '@mui/material';
import { EXPERIENCE_TEXTS } from '@/constants/experienceText';
import { ExperienceCard } from '@/app/components/ExperienceCard';
import MotionTypography from '@/app/components/MotionTypography';

export function ExperienceSection() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1rem',
        background: '#f5f5f5',
        color: 'common.black',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1rem'
        }}
      >
        <MotionTypography
          color="common.black"
          variant="h4"
          sx={{ fontWeight: 'bold', paddingTop: '3rem' }}
        >
          {EXPERIENCE_TEXTS.mainTitle}
        </MotionTypography>
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

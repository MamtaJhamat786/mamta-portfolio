import { Box, Typography } from '@mui/material';
import MotionTypography from '@/app/components/MotionTypography';

interface ExperienceCardProps {
  title: string;
  bulletPoints: string[];
}

export function ExperienceCard({ title, bulletPoints }: ExperienceCardProps) {
  return (
    <Box
      sx={{
        transition: "background-color 0.3s ease",
      }}
    >
      <MotionTypography
        sx={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          borderBottom: '1px solid black',
          paddingBottom: '0.5rem',
        }}
      >
        {title}
      </MotionTypography>
      {bulletPoints.map((point, index) => (
        <Typography key={index} sx={{ display: 'block', mb: 1 }}>
          • {point}
        </Typography>
      ))}
    </Box>
  );
}

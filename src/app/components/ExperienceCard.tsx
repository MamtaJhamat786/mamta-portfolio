import { Box, Typography } from '@mui/material';

interface ExperienceCardProps {
  title: string;
  bulletPoints: string[];
}

export function ExperienceCard({ title, bulletPoints }: ExperienceCardProps) {
  return (
    <Box
      sx={{
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'primary.light',
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "primary.dark",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        color="commin.white"
        sx={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          borderBottom: '1px solid white',
          paddingBottom: '0.5rem',
        }}
      >
        {title}
      </Typography>
      {bulletPoints.map((point, index) => (
        <Typography key={index} sx={{ display: 'block', mb: 1 }}>
          • {point}
        </Typography>
      ))}
    </Box>
  );
}

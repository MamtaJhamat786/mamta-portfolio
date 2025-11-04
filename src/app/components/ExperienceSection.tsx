import { Box, Typography } from '@mui/material';

export function ExperienceSection() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          margin: '4rem',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
          backgroundColor: 'primary.dark'
        }}
      >
        <Typography color="common.white" variant="h4">
          Experience
        </Typography>
      </Box>
    </Box>
  );
}

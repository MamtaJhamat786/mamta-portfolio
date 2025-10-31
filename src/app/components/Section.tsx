"use client";

import { Box, Typography } from "@mui/material";

interface SectionProps {
  id: string;
  title: string;
  color: string;
}

export default function Section({ id, title, color }: SectionProps) {
  return (
    <Box
      id={id}
      sx={{
        height: "100vh",
        p: 4,
        bgcolor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}

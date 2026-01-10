import { IconButton } from '@mui/material';

interface SocialIconProps{
  href: string;
  icon: React.ReactNode;
}

export function SocialIcon({href, icon}: SocialIconProps) {
  return(
    <IconButton
      sx={{ color: 'primary.dark' }}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </IconButton>
  )
}
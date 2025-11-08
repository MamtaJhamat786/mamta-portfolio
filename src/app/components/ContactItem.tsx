import { Link, Stack, Typography } from '@mui/material';

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function ContactItem({ href, icon, label }: ContactItemProps) {
  return (
    <Link
      href={href}
      underline="none"
      color="inherit"
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        <Typography>{label}</Typography>
      </Stack>
    </Link>
  )
}
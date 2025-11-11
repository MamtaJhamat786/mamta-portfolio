import { Box, Typography, Stack } from '@mui/material';
import myImage from '../../../public/images/portfolio_img.jpg';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { ContactItem } from '@/app/components/ContactItem';
import { CONTACT_TEXTS } from '@/constants/contactText';
import gradient from '../../../public/images/gradient.jpg';

export function ContactSection() {
  return (
    <Box
      display="flex"
      gap="2rem"
      padding="2rem"
      marginTop="3rem"
      alignItems="center"
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        backgroundImage: `url(${gradient.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: { md: '100vh', sm: '100%' }
      }}
    >
      <Image src={myImage} alt="my_img" height={350} />
      <Box
        gap="2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          color="common.white"
          sx={{ fontWeight: 'bold' }}
        >
          {CONTACT_TEXTS.title}
        </Typography>

        <Stack spacing={2} alignItems="start">
          <ContactItem
            href={CONTACT_TEXTS.email.href}
            icon={<EmailIcon />}
            label={CONTACT_TEXTS.email.label}
          />
          <ContactItem
            href={CONTACT_TEXTS.linkedin.href}
            icon={<LinkedInIcon />}
            label={CONTACT_TEXTS.linkedin.label}
          />
          <ContactItem
            href={CONTACT_TEXTS.github.href}
            icon={<GitHubIcon />}
            label={CONTACT_TEXTS.github.label}
          />
          <ContactItem
            href={CONTACT_TEXTS.phone.href}
            icon={<PhoneIcon />}
            label={CONTACT_TEXTS.phone.label}
          />
        </Stack>
      </Box>
    </Box>
  );
}

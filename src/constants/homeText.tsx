import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

export const HOME_TEXTS = {
  subtitle: 'A little bit about me',
  title: 'Hi 🙋‍♀️ , I AM MAMTA',
  description: 'Passionate Frontend Developer with 4+ years of experience in React + TypeScript and Redux Toolkit Query. I craft pixel-perfect, responsive interfaces directly from Figma designs and ensure high-quality, user-centered web applications.',
  technologiesLabel: 'Technical skills:',
  email: 'mamtajhamat27@gmail.com',
  phone: '+37253952494',
}


export const HOME_SECTIONS = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <PersonIcon /> },
  { id: 'experience', label: 'Experience', icon: <WorkIcon /> },
  { id: 'contact', label: 'Contact', icon: <MailIcon /> },
];

export const SOCIAL_INFO = [
  {
    href: "https://www.facebook.com/kaur.mamta.96",
    icon: <FacebookIcon />
  },
  {
    href: "https://www.linkedin.com/in/mamta-%E2%80%94-16a510170/",
    icon: <LinkedInIcon />
  },
  {
    href: "https://github.com/MamtaJhamat786",
    icon: <GitHubIcon />
  }
]
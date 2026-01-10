'use client';

import { Typography, TypographyProps } from '@mui/material';
import { motion, MotionProps } from 'framer-motion';
import { FC, ReactNode } from 'react';


interface MotionTypographyProps extends TypographyProps {
  children: ReactNode;
  motionProps?: MotionProps; // Pass any motion props safely
}

const MotionTypography: FC<MotionTypographyProps> = ({
  children,
  motionProps,
  ...props
}) => {
  const defaultMotion: MotionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.25, duration: 1, ease: 'easeOut' },
  };

  return (
    <motion.div {...defaultMotion} {...motionProps}>
      <Typography {...props}>{children}</Typography>
    </motion.div>
  );
};

export default MotionTypography;

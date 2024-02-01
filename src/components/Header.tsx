import React, { useEffect, useState } from 'react';

import {
  Avatar, Button, Stack, Typography,
} from '@mui/joy';
import TextTransition, { presets } from 'react-text-transition';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoReaderOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import greeting from '../utils/Greeting';
import { ATypography } from '../App';
import { useMobileMode } from './Responsive';

export const visitors = [
  'stranger',
  'collaborator',
  'fellow developer',
  'fellow human',
  'friend',
];

export default function Header() {
  const mobile = useMobileMode();
  const [visitor, setVisitor] = useState(visitors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitor((prev) => {
        const nextIndex = (visitors.indexOf(prev) + 1) % visitors.length;
        return visitors[nextIndex];
      });
    }, 2000);
    return () => { clearInterval(interval); };
  }, []);

  return (
    <Stack
      gap="20px"
    >
      <Button
        size="lg"
        component={Link}
        variant="outlined"
        to="/resume"
        startDecorator={(
          <Avatar size="lg" color="primary">
            <IoReaderOutline />
          </Avatar>
          )}
        endDecorator={(
          <RiArrowRightSLine size="1.3em" />
          )}
        sx={(theme) => ({
          '&:not(:hover)': {
            backgroundColor: '#0000008c',
          },
          '&:hover': {
            boxShadow: `0 0 40px 5px ${theme.palette.primary[900]}`,
          },
          position: 'relative',
          borderRadius: '100px',
          width: 'fit-content',
          padding: 1,
          paddingRight: 2,
          '&::before': mobile ? {} : {
            position: 'absolute',
            content: '""',
            top: '50%',
            left: '-50px',
            width: '50px',
            height: '70px',
            marginLeft: '-1px',
            border: `1.5px solid ${theme.palette.primary[700]}`,
            borderBottom: 'none',
            borderRight: 'none',
            borderTopLeftRadius: '50px',
          },
        })}
      >
        <Stack alignItems="flex-start" sx={{ textAlign: 'left' }}>
          <Typography level="body-lg" textColor="inherit" fontWeight="lg" lineHeight="1.2em">
            Access online resume
          </Typography>
          <Typography level="body-md" textColor="inherit" fontWeight="sm" sx={{ opacity: 0.8 }}>
            Dynamic, interactive, and up-to-date
          </Typography>
        </Stack>
      </Button>
      <Typography
        level={mobile ? 'h1' : 'h1'}
        // level='h1'
        fontWeight="md"
        display="flex"
        flexWrap="wrap"
        marginBottom={mobile ? '1em' : 0}
        sx={(theme) => ({
          position: 'relative',
          '&::before': mobile ? {} : {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-50px',
            height: 'calc(100% + 20px)',
            width: '1px',
            background: `linear-gradient(to bottom, ${theme.palette.primary[700]}, ${theme.palette.primary[600]})`,
          },
        })}
      >
        {greeting()}
        ,&nbsp;
        <TextTransition springConfig={presets.stiff}>
          {visitor}
        </TextTransition>
      </Typography>
      <Typography
        level="h4"
        textAlign="left" 
        textColor="text.tertiary"
        sx={(theme) => ({
          position: 'relative',
          '&::before': mobile ? {} : {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-50px',
            height: 'calc(100% + 80px)',
            width: '1px',
            background: `linear-gradient(to bottom, ${theme.palette.primary[600]}, ${theme.palette.primary[400]})`,
          },
        })}
      >
        The name&apos;s
        {' '}
        <ATypography textColor="primary.400" href="https://in.linkedin.com/in/pragnya-nagure">
          Pragnya Nagure
        </ATypography>
        {' '}
        , but you can call me
        {' '}
        <ATypography textColor="primary.400" href="https://github.com/xxpsynagure">
          xxpsy
        </ATypography>
        . I&apos;m a
        {' '}
        <Typography textColor="text.primary">
          Software Developer.
        </Typography>
      </Typography>
    </Stack>
  );
}

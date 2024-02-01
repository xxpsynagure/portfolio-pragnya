import {
  Avatar, Box, Chip, Divider, Stack, Typography,
} from '@mui/joy';
import React from 'react';
import {
  RiBriefcaseLine,
  RiCompasses2Line,
  RiContactsLine,
  RiSettings5Line,
} from 'react-icons/ri';
import { TbSchool } from 'react-icons/tb';
import { IoLanguage } from 'react-icons/io5';
import details from './assets/Details';
import FixedMode from './components/FixedMode';
import { Education, Experience, Skills } from './components/Details';
import Title from './components/Title';
import { useMobileMode } from './components/Responsive';

export function Languages() {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} p={1}>
      {details.languages.map((language) => (
        <Chip
          size="lg"
          key={language.name}
          color={language.native ? 'success' : 'primary'}
          variant="soft"
          startDecorator={(
            <Avatar
              color={language.native ? 'success' : 'primary'}
              variant="solid"
              size="sm"
            >
              {language.level}
            </Avatar>
          )}
        >
          {`${language.name}${language.native ? ' (native)' : ''}`}
        </Chip>
      ))}
    </Stack>
  );
}

export default function Resume() {
  const mobile = useMobileMode();
  return (
    <FixedMode mode="system">
      <Title text="Resume - Pragnya Nagure" />
      <Stack
        alignItems="center"
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Box component="div" maxWidth="65em">
          <Stack
            paddingX={mobile ? 4 : 12}
            paddingY={mobile ? 4 : 6}
            gap={3}
            width="100%"
            height="100%"
          >
            <Stack component="header" gap={1}>
              <Typography level="h2" textAlign="left" fontWeight="xl">
                Pragnya Nagure
              </Typography>
              <Typography level="h4" textAlign="left" fontWeight="lg" textColor="text.secondary">
                Software Developer
              </Typography>
              <Typography level="body-sm" textAlign="left">
                I am an enthusiastic computer science engineering undergraduate with a passion for coding, backend development, and game development. 
                I enjoy sharing my knowledge through handling sessions and workshops, and I am always on the lookout for better ways to gain knowledge and improve my skills through contribution.
              </Typography>
            </Stack>
            <Box
              component="section"
              sx={{
                gap: 3,
                ...(mobile
                  ? {
                    display: 'flex',
                    flexDirection: 'column',
                  }
                  : {
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                  }),
              }}
            >
              <Stack
                gap={3}
                sx={{
                  gridColumn: '1 / 2',
                }}
              >
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <RiContactsLine />
                      </Avatar>
                    )}
                  >
                    Contact
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    {['address', 'email', 'phone', 'linkedin', 'github'].map(
                      (key) => (
                        <Stack key={key}>
                          <Typography
                            level="body-md"
                            fontWeight="bold"
                            textAlign="left"
                            textTransform="capitalize"
                            sx={{
                              width: '100px',
                            }}
                          >
                            {key}
                          </Typography>
                          <Typography
                            level="body-sm"
                            textAlign="left"
                            sx={{
                              wordBreak: 'break-word',
                            }}
                          >
                            {
                              details.contact[
                                key as keyof typeof details.contact
                              ]
                            }
                          </Typography>
                        </Stack>
                      ),
                    )}
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    textAlign="left"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <RiSettings5Line />
                      </Avatar>
                    )}
                  >
                    Technical skills
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    <Skills include={['languages', 'frameworks', 'tools']} />
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <RiCompasses2Line />
                      </Avatar>
                    )}
                  >
                    Competencies
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    <Skills include={['others']} />
                  </Stack>
                </Stack> 
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <RiCompasses2Line />
                      </Avatar>
                    )}
                  >
                    Languages
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    <Languages />
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                gap={3}
                sx={{
                  gridColumn: '2 / 3',
                }}
              >
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <RiBriefcaseLine />
                      </Avatar>
                    )}
                  >
                    Work history
                  </Typography>
                  <Divider />
                  <Experience />
                </Stack>
                <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <TbSchool />
                      </Avatar>
                    )}
                  >
                    Education
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    <Education />
                  </Stack>
                </Stack>
                {/* <Stack gap={1}>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    startDecorator={(
                      <Avatar size="sm">
                        <IoLanguage />
                      </Avatar>
                    )}
                  >
                    Languages
                  </Typography>
                  <Divider />
                  <Stack gap={1}>
                    <Languages />
                  </Stack>
                </Stack> */}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </FixedMode>
  );
}

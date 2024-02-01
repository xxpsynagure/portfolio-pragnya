/* eslint-disable no-bitwise */
import {
  Avatar,
  Box, Button, Card, Chip, CircularProgress, Stack, Typography,
} from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { BsJournalBookmark, BsJournalCode } from 'react-icons/bs';
import {
  FaCode, FaCodeBranch, FaStar,
} from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { Repository, getRepositories } from '../utils/Api';
import colors from '../assets/colors.json';
import { Default, Mobile } from './Responsive';

/**
 * Beautifies a string
 * @param str The string to beautify
 * @returns The beautified string
 */
export function beautify(str: string) {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function ProjectCard({
  project,
}: {
  project: Repository;
}) {
  return (
    <Card
      component={Stack}
      variant="outlined"
      gap={2}
      p={3}
      justifyContent="space-between"
      sx={{
        width: 'max(30%, 320px)',
      }}
    >
      <Stack gap={2}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Avatar>
            <BsJournalBookmark />
          </Avatar>
          <Stack>
            <Typography level="h4">
              {beautify(project.name)}
            </Typography>
            <Typography
              level="body-md"
              startDecorator={(
                <FaCode style={{
                  color: colors[project.language as keyof typeof colors]?.color || 'white',
                }}
                />
                  )}
            >
              {project.language}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          level="body-md"
          sx={{
            flexGrow: 0,
          }}
        >
          {project.description}
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Stack direction="row" gap={2}>
          <Typography
            level="body-md"
            startDecorator={
              <FaStar />
                }
          >
            {project.stargazers_count}
          </Typography>
          <Typography
            level="body-md"
            startDecorator={
              <FaCodeBranch />
            }
          >
            {project.forks}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <Button
            variant="plain"
            component="a"
            color="primary"
            href={project.html_url}
            target="_blank"
            sx={{
              flexShrink: 0,
            }}
          >
            Git Repository
          </Button>
          {project.homepage && (
          <Button
            component="a"
            color="primary"
            variant="solid"
            href={project.homepage}
            target="_blank"
            endDecorator={
              <RxOpenInNewWindow />
            }
          >
            Visit
          </Button>
          )}
        </Stack>
      </Stack>
    </Card>
  );
}

export default function Featured() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    getRepositories('xxpsynagure').then((data) => {
      console.log(data);
      setProjects(data.filter((project) => project.topics.includes('featured')));
    }).catch(() => {
      setError(new Error('Failed to load projects, check your internet connection.'));
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Stack
      gap={3}
    >
      <Stack
        gap={1}
      >
        <Typography
          level="h2"
          textAlign="left"
          sx={{ position: 'relative' }}
          id="featured"
        >
          <Default>
            <Avatar
              color="primary"
              sx={(theme) => ({
                position: 'absolute',
                left: '-50px',
                top: '0',
                transform: 'translateX(-50%)',
                border: 'none',
                outline: `1.5px solid ${theme.palette.primary[400]}`,
                boxShadow: `0 0 40px 5px ${theme.palette.primary[700]}`,
              })}
            >
              <BsJournalCode />
            </Avatar>
          </Default>
          Featured
          {' '}
          <Typography
            textColor="info.400"
            alignItems="center"
            fontWeight="xl"
            endDecorator={(
              <Default>
                <Chip variant="soft" color="primary">
                  {projects.length}
                  {' '}
                  repositories
                </Chip>
              </Default>
          )}
          >
            Projects
          </Typography>
        </Typography>
        <Mobile>
          <Chip variant="soft">
            {projects.length}
            {' '}
            repositories
          </Chip>
        </Mobile>
      </Stack>
      <Box
        component={Stack}
        direction="row"
        gap={3}
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            flexGrow: 1,
            height: '250px',
            minWidth: '300px',
          },
        }}
      >
        {error && (
          <Typography level="body-lg" color="danger">
            {error.message}
          </Typography>
        )}
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {projects.map((project) => (
              <ProjectCard
                project={project}
                key={project.name}
              />
            ))}
          </>
        )}
      </Box>
    </Stack>
  );
}

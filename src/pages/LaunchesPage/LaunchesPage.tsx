import React, { FC, useState, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { GET_SPACE_X_LAUNCHES } from '../../api/launches';
import { LaunchType } from '../../types/LaunchType';
import styles from './LaunchesPage.module.scss';
import LaunchInfo from '../../components/Launch/LaunchOverview/LaunchOverview';
import { useDebounce } from '../../hooks/useDebounce';
import RocketLoader from '../../components/RocketLoader/RocketLoader';
import { useRocketLoader } from '../../hooks/useRocketLoader';
import { useOnScreen } from '../../hooks/useVisible';

const LaunchesPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { loading, data: { launches = [] as LaunchType[] } = {} } = useQuery<{
    launches: LaunchType[];
  }>(GET_SPACE_X_LAUNCHES, {
    variables: {
      offset,
      missionName: debouncedSearchTerm
    }
  });
  const showLaunches = useRocketLoader(loading);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(loadMoreRef);
  console.log(isVisible);

  // useEffect(() => setOffset((o: number) => o + 10), [isVisible]);

  const handleSearchChange = ({ target: { value = '' } }) =>
    setSearchTerm(value);

  return (
    <>
      <Container maxWidth="lg" className={styles.launchesContainer}>
        <Typography variant="h4" component="h4" color="textPrimary">
          Welcome to <span className={styles.launchesSpace}>Space X Land!</span>
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          color="textPrimary"
          className={styles.launchesDescription}
        >
          Explore Space X recent lauches
        </Typography>
        {showLaunches && (
          <>
            <TextField
              id="outlined-basic"
              placeholder="Search for Space X launches"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
              onChange={handleSearchChange}
            />
            <Grid container justify="flex-start" spacing={7}>
              {launches?.map((launch: LaunchType) => (
                <LaunchInfo key={launch.id} launch={launch} />
              ))}
            </Grid>
          </>
        )}
        {!showLaunches && <RocketLoader />}
      </Container>
      <div ref={loadMoreRef}>Loading...</div>
    </>
  );
};

export default LaunchesPage;

import React, { FC, useState, useEffect } from 'react';
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

const LaunchesPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data: { launches = [] as LaunchType[] } = {}, refetch } = useQuery<{
    launches: LaunchType[];
  }>(GET_SPACE_X_LAUNCHES, {
    variables: {
      missionName: debouncedSearchTerm ?? ''
    }
  });

  useEffect(() => {
    console.log(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchChange = ({ target: { value = '' } }) =>
    setSearchTerm(value);

  return (
    <Container maxWidth="lg">
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
      <TextField
        id="outlined-basic"
        placeholder="Search for Space X launchesr"
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
    </Container>
  );
};

export default LaunchesPage;

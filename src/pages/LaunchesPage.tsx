import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { SPACE_X_LAUNCHES } from '../api/launches';
import { LaunchType } from '../types/LaunchType';
import LaunchInfo from '../components/LaunchInfo/LaunchInfo';
import styles from './LaunchesPage.module.scss';

const useStyles = makeStyles({
  launches: {
    marginTop: '40px'
  }
});

const LaunchesPage: FC = () => {
  const classes = useStyles();
  const { loading, data: { launches = [] as LaunchType[] } = {} } =
    useQuery<{ launches: LaunchType[] }>(SPACE_X_LAUNCHES);
  console.log(launches);

  return (
    <Container maxWidth="lg" className={classes.launches}>
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
      <Grid container justify="flex-start" spacing={7}>
        {launches?.map((launch: LaunchType) => (
          <LaunchInfo key={launch.id} launch={launch} />
        ))}
      </Grid>
    </Container>
  );
};

export default LaunchesPage;

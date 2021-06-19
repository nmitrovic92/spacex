import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { SPACE_X_LAUNCHES } from '../api/launches';
import styles from './LaunchesPage.module.scss';

const useStyles = makeStyles({
  launches: {
    marginTop: '40px'
  }
});

const LaunchesPage: FC = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(SPACE_X_LAUNCHES);
  console.log(data);
  console.log(loading);

  return (
    <Container maxWidth="md" className={classes.launches}>
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
    </Container>
  );
};

export default LaunchesPage;

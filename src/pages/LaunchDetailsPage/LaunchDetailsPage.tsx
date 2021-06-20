import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SPACE_X_LAUNCH } from '../../api/launches';
import { LaunchType } from '../../types/LaunchType';
import LaunchDetails from '../../components/Launch/LaunchDetails/LaunchDetails';
import { useRocketLoader } from '../../hooks/useRocketLoader';
import RocketLoader from '../../components/RocketLoader/RocketLoader';

const LaunchDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data: { launch = {} as LaunchType } = {} } = useQuery<{
    launch: LaunchType;
  }>(GET_SPACE_X_LAUNCH, {
    variables: { id }
  });
  const showLaunches = useRocketLoader(loading);

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        {!showLaunches && <RocketLoader />}
        {showLaunches && (
          <>{Object.keys(launch).length && <LaunchDetails launch={launch} />}</>
        )}
      </Grid>
    </Container>
  );
};

export default LaunchDetailsPage;

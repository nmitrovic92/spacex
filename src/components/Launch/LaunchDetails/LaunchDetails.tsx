import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useLaunchImage } from '../../../hooks/useLaunchImage';
import { LaunchType } from '../../../types/LaunchType';
import { useStyles } from '../LaunchOverviewMuiStyles';
import SpaceXPlaceholder from '../../../assets/images/space-x-placeholder.jpeg';

interface LaunchDetailsProps {
  launch: LaunchType;
}

const LaunchDetails: FC<LaunchDetailsProps> = ({ launch }) => {
  const classes = useStyles();
  const validDate = !Number.isNaN(new Date(launch.launch_date_utc).getTime());
  const { launchImagesCount, firstLaunchImage } = useLaunchImage(launch);

  return (
    <Card className={classes.cardDetails} variant="outlined">
      <CardContent>
        {validDate && (
          <Chip
            className={classes.launchDate}
            label={new Date(launch.launch_date_utc).toLocaleDateString()}
            variant="outlined"
            color="primary"
          />
        )}
        {launchImagesCount > 0 && (
          <CardMedia className={classes.launchImg} image={firstLaunchImage} />
        )}
        {launchImagesCount === 0 && (
          <CardMedia className={classes.launchImg} image={SpaceXPlaceholder} />
        )}
        <Typography
          className={classes.cardDetailsTitle}
          variant="h5"
          component="h5"
          color="textPrimary"
          gutterBottom
        >
          {launch.mission_name}
        </Typography>
        <Typography color="textSecondary">
          {launch.details || 'No details about launch.'}
        </Typography>
        <Alert
          className={classes.launchSuccess}
          severity={launch.launch_success ? 'success' : 'error'}
          color={launch.launch_success ? 'success' : 'error'}
        >
          {launch.launch_success
            ? 'This mission was success!'
            : 'This mission was failure!'}
        </Alert>
        <Typography
          className={classes.cardDetailsTitle}
          variant="h6"
          component="h6"
          color="textPrimary"
          gutterBottom
        >
          Rocket Info 🚀
        </Typography>
        <Typography color="textSecondary">
          {launch.rocket.rocket_name} {launch.rocket.rocket_type}
        </Typography>
        <Typography color="textSecondary">
          {launch.rocket.rocket.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to="/launches">
          <Button size="medium" variant="contained" color="primary">
            Go Back
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default LaunchDetails;

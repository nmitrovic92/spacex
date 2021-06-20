import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Chip
} from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import classNames from 'classnames';
import { LaunchType } from '../../../types/LaunchType';
import SpaceXPlaceholder from '../../../assets/images/space-x-placeholder.jpeg';
import { useStyles } from '../LaunchOverviewMuiStyles';
import { useLaunchImage } from '../../../hooks/useLaunchImage';
import styles from './LaunchOverview.module.scss';

interface LaunchInfoProps {
  launch: LaunchType;
}

const LaunchInfo: FC<LaunchInfoProps> = ({ launch }) => {
  const classes = useStyles();
  const { launchImagesCount, firstLaunchImage } = useLaunchImage(launch);

  const renderLaunchDetails = (): string => {
    if (launch.details) {
      return `${launch.details.slice(0, 250)}...`;
    }

    return 'No details about launch.';
  };

  return (
    <Grid xs={4} item>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {launchImagesCount > 0 && (
            <CardMedia className={classes.launchImg} image={firstLaunchImage} />
          )}
          {launchImagesCount === 0 && (
            <CardMedia
              className={classes.launchImg}
              image={SpaceXPlaceholder}
            />
          )}
          <Chip
            className={classes.launchDate}
            label={new Date(launch.launch_date_utc).toLocaleDateString()}
            variant="outlined"
            color="primary"
          />
          <Typography
            variant="h6"
            component="h6"
            color="textPrimary"
            gutterBottom
          >
            {launch.mission_name}
          </Typography>
          <Typography
            className={classNames(classes.launchDetails, {
              [styles.launchDetailsEmpty]: !launch.details
            })}
            color="textSecondary"
          >
            {renderLaunchDetails()}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Link to={`/launches/${launch.id}/rocket`}>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LaunchInfo;

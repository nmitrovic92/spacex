import React, { FC } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Icon
} from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import classNames from 'classnames';
import { LaunchType } from '../../types/LaunchType';
import SpaceXPlaceholder from '../../assets/images/space-x-placeholder.jpeg';
import { useStyles } from './LaunchInfoMuiStyles';
import styles from './LaunchInfo.module.scss';

interface LaunchInfoProps {
  launch: LaunchType;
}

const LaunchInfo: FC<LaunchInfoProps> = ({ launch }) => {
  // console.log(launch);
  const classes = useStyles();
  const launchImages = launch?.links.flickr_images;
  const { length: launchImagesCount } = launchImages;
  const [firstLaunchImage] = launchImages;

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
          <Typography
            className={classes.missionName}
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
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LaunchInfo;

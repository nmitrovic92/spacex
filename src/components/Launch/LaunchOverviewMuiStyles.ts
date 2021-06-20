import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    launchImg: {
      height: 300
    },
    card: {
      backgroundColor: 'transparent'
    },
    cardDetails: {
      backgroundColor: 'transparent',
      textAlign: 'center',
      width: '100%'
    },
    cardDetailsTitle: {
      marginTop: '30px'
    },
    cardActions: {
      justifyContent: 'space-between'
    },
    launchDate: {
      margin: '20px 0'
    },
    launchDetails: {
      height: '150px'
    },
    launchSuccess: {
      margin: '20px'
    }
  })
);

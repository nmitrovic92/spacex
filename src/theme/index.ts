import { createMuiTheme } from '@material-ui/core';
import { PaletteColor } from './pallete';

const primary: PaletteColor = {
  main: '#5569ff',
  contrastText: '#223354'
};
const secondary: PaletteColor = {
  main: '#ffa319'
};

export const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    text: {
      primary: 'white'
    }
  }
});

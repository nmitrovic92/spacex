import { createMuiTheme } from '@material-ui/core';
import { PaletteColor } from '../types/PalleteColorType';

const primary: PaletteColor = {
  main: '#688EFF'
};
const secondary: PaletteColor = {
  main: '#171c24'
};

export const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    text: {
      primary: '#fff',
      secondary: '#919EAB'
    }
  }
});

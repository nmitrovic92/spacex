import { createMuiTheme } from '@material-ui/core';
import { PaletteColor } from '../types/PalleteColorType';

const primary: PaletteColor = {
  main: '#688EFF'
};
const secondary: PaletteColor = {
  main: '#171c24'
};

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        margin: '50px 0',
        borderRadius: '2rem'
      },
      notchedOutline: {
        borderColor: '#919EAB'
      }
    },
    MuiInputBase: {
      input: {
        width: '400px'
      }
    }
  },
  palette: {
    primary,
    secondary,
    text: {
      primary: '#fff',
      secondary: '#919EAB'
    }
  }
});

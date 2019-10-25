import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

const cyanMain = cyan['A700']

export default createMuiTheme({
  palette: {
    primary: {
      main: cyanMain,
      contrastText: 'white'
    }
  }
});
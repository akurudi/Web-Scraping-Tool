import React from "react";
import PropTypes from "prop-types";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.grey['300'],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -15,
    marginLeft: -15,
  },
}));

const FormButton = props => {
  const classes = useStyles();
  
  return (
    <Grid container justify="center">
      <Grid item>
      <div className={classes.wrapper}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          endIcon={<CachedIcon />}
          disabled={props.loading}
        >
          Fetch
        </Button>
        {props.loading && <CircularProgress size={30} className={classes.buttonProgress} />}
        </div>
      </Grid>
    </Grid>
  );
};

FormButton.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default FormButton;
import React from "react";
import PropTypes from "prop-types";
import { SnackbarContent, IconButton } from "@material-ui/core";
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Close as CloseIcon
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const iconVariant = {
  success: CheckCircleIcon,
  error: ErrorIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[800]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

const CustomSnackbarContent = props => {
  const classes = useStyles();
  const { success, message } = props;
  const variant = success ? "success" : "error";
  const Icon = iconVariant[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      message={
        <span className={classes.message}>
          <Icon className={classes.iconVariant} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={props.handleClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  );
};

CustomSnackbarContent.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default CustomSnackbarContent;

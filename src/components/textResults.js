import React from "react";
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { CheckCircle as SuccessIcon, Error as ErrorIcon } from "@material-ui/icons";

const iconVariant = {
  success: SuccessIcon,
  error: ErrorIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[800]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  }
}));

const TextResults = props => {
  const classes = useStyles();
  const { error } = props.results;
  const variant = error ? "error" : "success";
  const Icon = iconVariant[variant];

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes[variant]}>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.section} />
      </ListItem>
      <Box
        p={2}
        m={1}
        bgcolor="text.secondary"
        textAlign="left"
        color="primary.main"
      >
        {error ? props.results.message : props.results.data}
      </Box>
      <Divider variant="fullWidth" />
    </>
  );
};

TextResults.propTypes = {
  results: PropTypes.object.isRequired
}

export default TextResults;
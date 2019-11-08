import React from "react";
import PropTypes from "prop-types";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      '&:hover fieldset': {
        borderColor: '#3ab1cd',
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white"
    },
    "& .MuiFormHelperText-root": {
      color: "white"
    }
  }
}));

const FormTextInput = props => {
  const classes = new useStyles();
  const handleChange = event => {
    props.handleURLChange(event.target.value)
  };
  return (
    <FormControl variant="filled" fullWidth={true} required className={classes.root}>
      <TextField
        id="form-input"
        label="URL"
        required
        variant="outlined"
        name="url"
        value={props.value}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormHelperText>URL of the page.</FormHelperText>
    </FormControl>
  );
};

FormTextInput.propTypes = {
  handleURLChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormTextInput;
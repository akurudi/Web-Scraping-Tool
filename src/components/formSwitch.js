import React, { useEffect } from "react";
import {
  Switch,
  FormGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  FormControlLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import switchValues from "../utils/switchConfig";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "white"
    },
    "& .MuiFormHelperText-root": {
      color: "white"
    }
  }
}));

let FormSwitch = (props) => {
  const initSwitchState = {};
  switchValues.forEach(elem => {
    initSwitchState[elem.value] = elem.checked
  })
  const [values, setValues] = React.useState(initSwitchState);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };
  useEffect(() => {
    props.handleFeatureChange(values)
  })
  const classes = new useStyles();
  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">Select Features</FormLabel>
      <FormGroup row>
        {switchValues.map(elem => {
          return (
            <FormControlLabel
              control={<Switch checked={values[elem.value]} value={elem.value} onChange={handleChange(elem.value)}/>}
              label={elem.label}
              key={elem.value}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>Enable/Disable options to check for.</FormHelperText>
    </FormControl>
  );
};

export default FormSwitch;

import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import CustomSnackbarContent from "./customSnackbarContent";

const CustomSnackbar = props => {
  const { show, success, message } = props;
  const handleClose = () => {
    props.handleFeedbackChange({
      show: false,
      success,
      message
    });
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={show}
      onClose={handleClose}
      autoHideDuration={8000}
    >
      <CustomSnackbarContent
        success={success}
        message={message}
        handleClose={handleClose}
      />
    </Snackbar>
  );
};

CustomSnackbar.propTypes = {
  show: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleFeedbackChange: PropTypes.func.isRequired
};

export default CustomSnackbar;

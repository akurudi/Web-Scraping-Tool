import React, { useState } from "react";
import PropTypes from 'prop-types';
import PaperCustom from "./paperCustom";
import FormTextInput from "./formTextInput";
import FormSwitch from "./formSwitch";
import FormButton from "./formButton";
import CustomSnackbar from "./customSnackbar";
import apiEndpoint from "../utils/apiEndpoint";

const FormMain = props => {
  const [url, setURL] = useState("");
  const [features, setFeatures] = useState(null);
  const [feedback, setFeedback] = useState({
    show: false,
    success: false,
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    const postData = { url, ...features };
    let queryParams = new URLSearchParams(postData);
    fetch(`${apiEndpoint.url}/api/all/?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setFeedback({
            show: true,
            success: false,
            message: data.message.toString()
          });
        } else {
          props.setData(data);
          setFeedback({
            show: true,
            success: true,
            message: "Request Successful."
          });
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setFeedback({
          show: true,
          success: false,
          message: err.toString()
        });
        setLoading(false);
      });
  };
  return (
    <PaperCustom background="main" paperElevation={20}>
      <form onSubmit={handleSubmit}>
        <PaperCustom background="dark" paperElevation={10}>
          <FormTextInput handleURLChange={setURL} value={url} />
        </PaperCustom>
        <PaperCustom background="dark" paperElevation={10}>
          <FormSwitch handleFeatureChange={setFeatures} />
        </PaperCustom>
        <FormButton loading={loading}/>
        <CustomSnackbar {...feedback} handleFeedbackChange={setFeedback} />
      </form>
    </PaperCustom>
  );
};

FormMain.propTypes = {
  setData: PropTypes.func.isRequired
}

export default FormMain;
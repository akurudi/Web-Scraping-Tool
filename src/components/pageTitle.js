import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const pageTitle = props => (
  <Helmet>
    <title>{props.title}</title>
  </Helmet>
);

pageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default pageTitle;

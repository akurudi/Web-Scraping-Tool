import React from "react";
import PropTypes from 'prop-types';
import PaperCustom from "./paperCustom";
import TextResults from "./textResults";
import TabularResults from "./tabularResults";
import List from "@material-ui/core/List";

const Results = props => {
  return (
    <PaperCustom background="main" paperElevation={20}>
      <PaperCustom background="dark" paperElevation={10}>
        <List>
          {props.data.canonical && (
            <TextResults results={props.data.canonical} section="Canonical" />
          )}
          {props.data.hreflangs && (
            <TabularResults
              results={props.data.hreflangs}
              section="Hreflangs"
            />
          )}
          {props.data.opengraph && (
            <TabularResults
              results={props.data.opengraph}
              section="Open Graph"
            />
          )}
          {props.data.headings && (
            <TabularResults results={props.data.headings} section="Heading" />
          )}
          {props.data.title && (
            <TextResults results={props.data.title} section="Title" />
          )}
          {props.data.description && (
            <TextResults
              results={props.data.description}
              section="Meat Description"
            />
          )}
          {props.data.keywords && (
            <TextResults
              results={props.data.keywords}
              section="Meta Keywords"
            />
          )}
        </List>
      </PaperCustom>
    </PaperCustom>
  );
};

Results.propTypes = {
  data: PropTypes.object.isRequired
}

export default Results;
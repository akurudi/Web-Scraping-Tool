import React from "react";
import { Grid, Button } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";

const formButton = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          endIcon={<CachedIcon />}
        >
          Fetch
        </Button>
      </Grid>
    </Grid>
  );
};

export default formButton;

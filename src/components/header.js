import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import PageviewIcon from '@material-ui/icons/Pageview';

const PaperContainer = withStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    margin: theme.spacing(2),
    padding: theme.spacing(1)
  }
}))(Paper);

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    boxShadow: "none"
  },
  pageviewIcon: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <PaperContainer elevation={20}>
      <AppBar bgcolor="primary.secondary" position="static" className={classes.root}>
        <Toolbar>
          <PageviewIcon className={classes.pageviewIcon} />
          <Typography variant="h6" className={classes.title}>
            SEO Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </PaperContainer>
  );
}

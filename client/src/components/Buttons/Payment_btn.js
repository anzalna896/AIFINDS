import React from "react";
import {
  withStyles,
  makeStyles
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    color: "white",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0a64a8",
    borderColor: "#0a64a8",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#0a64a8",
      borderColor: "#0a64a8"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0a64a8",
      borderColor: "#0a64a8"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #0a64a8"
    }
  }
})(Button);



const useStyles = makeStyles(theme => ({
  margin: {
    width:"20%",
    margin: theme.spacing(4)
  }
}));



export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        PAY
      </BootstrapButton>
    </div>
  );
}

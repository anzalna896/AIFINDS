import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

export default function Phone() {
  const classes = useStyles();

  return (
    <div
      class="uk-text-left"
      style={{
      
        height: "35vh",
        margin: "70px",
        width: 900,
        marginLeft: 250
      }}
    >
      <div style={{ margin: 30, marginTop: 10 }}>
        <form className={classes.root} noValidate>
          <ThemeProvider theme={theme}>
            <span style={{ fontWeight: "bold", fontSize: 25, margin: 6 }}>
              Varify your Password
            </span><br></br>
            <span style={{ fontWeight: "bold", fontSize: 15, margin: 6 }}>
              To provide the best experience for job seekers and employers, we
              need to verify that the phone number associated with your
              account belongs to you. The verification process is automated
              and takes less than a minute.
            </span>
            <div>
              <TextField
                className={classes.margin}
                label="Phone Number"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                style={{ width: 290 }}
              />
            </div>

            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Next
            </Button>

            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <Link to="/settings">Cancel</Link>
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

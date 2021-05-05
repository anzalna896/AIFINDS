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

export default function Password() {
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
            <TextField
              className={classes.margin}
              label="Current password"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              style={{ width: 290 }}
            />

            <div>
              <TextField
                className={classes.margin}
                label="New password"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                style={{ width: 290 }}
              />
            </div>

            <div>
              <TextField
                className={classes.margin}
                label="Repeat password"
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
              Save password
            </Button>

            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <Link to="/settings">Cancel changes</Link>
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

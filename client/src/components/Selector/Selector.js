import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        Experience
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-simple"
          }}
        >
          <MenuItem value="">
        
          </MenuItem>
          <MenuItem value={10}>0-1 yrs</MenuItem>
          <MenuItem value={20}>1-2 yrs</MenuItem>
          <MenuItem value={30}>3 yrs</MenuItem>
          <MenuItem value={10}>+3 yrs</MenuItem>
          <MenuItem value={20}>+5 yrs</MenuItem>
          <MenuItem value={30}>+10 yrs</MenuItem>
        </Select>
      </FormControl>
      
    </form>
  );
}

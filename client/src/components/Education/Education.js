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
    minWidth: 180
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
        Highest Qualification
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
          <MenuItem value={10}>Matriculation</MenuItem>
          <MenuItem value={20}>Plus Two yrs</MenuItem>
          <MenuItem value={30}>BBA</MenuItem>
          <MenuItem value={40}>BCA</MenuItem>
          <MenuItem value={50}>BA</MenuItem>
          <MenuItem value={60}>BSc yrs</MenuItem>
          <MenuItem value={70}>BCom yrs</MenuItem>
          <MenuItem value={80}>BSW yrs</MenuItem>
          <MenuItem value={90}>BTech</MenuItem>
          <MenuItem value={100}>MCA</MenuItem>
          <MenuItem value={110}>MSc</MenuItem>
          <MenuItem value={120}>MSW</MenuItem>
          <MenuItem value={130}>MA</MenuItem>
          <MenuItem value={140}>MBA</MenuItem>
          <MenuItem value={150}>MTech</MenuItem>
          <MenuItem value={160}>MCom</MenuItem>
          <MenuItem value={170}>ITI</MenuItem>
          <MenuItem value={180}>PolyTechnic</MenuItem>
          <MenuItem value={190}>BEd</MenuItem>
          <MenuItem value={200}>MEd</MenuItem>
          <MenuItem value={210}>CA</MenuItem>
          <MenuItem value={220}>PhD</MenuItem>
            </Select>
      </FormControl>
      
    </form>
  );
}

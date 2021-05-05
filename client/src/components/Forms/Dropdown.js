import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid black',
  },
  
  notchedOutline: {
    borderWidth: "1px",
    color:"white",
    borderColor: "white !important"
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
     alignItems:"center",
      justifyContent:"center",
    [theme.breakpoints.down("xs")]:{
      marginTop:"1em",
      alignItems:"center",
      justifyContent:"center"
    }
  },

 select: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down("xs")]:{
    justifyContent:"center",
   
    }
  },

  selectEmpty: {
    marginTop: theme.spacing(2)
  },

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

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div>
    
      <form className={classes.root} autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl} >
           <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color:"white"}}>
           EXPIRY
          </InputLabel>
          </FormControl>
        <FormControl variant="outlined" className={classes.formControl} >
          <InputLabel  id="demo-simple-select-outlined-label" style={{color:"white"}}>
            Month
          </InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            className={classes.select}
              input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="age"
                id="outlined-age-simple"
              />
               
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
            <MenuItem value={50}>5</MenuItem>
            <MenuItem value={60}>6</MenuItem>
            <MenuItem value={70}>7</MenuItem>
            <MenuItem value={80}>8</MenuItem>
            <MenuItem value={90}>9</MenuItem>
            <MenuItem value={100}>10</MenuItem>
            <MenuItem value={110}>11</MenuItem>
            <MenuItem value={120}>12</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label" style={{color:"white"}}>
            Year
          </InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            className={classes.select}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>2021</MenuItem>
            <MenuItem value={20}>2022</MenuItem>
            <MenuItem value={30}>2023</MenuItem>
            <MenuItem value={40}>2024</MenuItem>
            <MenuItem value={50}>2025</MenuItem>
            <MenuItem value={60}>2026</MenuItem>
            <MenuItem value={70}>2027</MenuItem>
            <MenuItem value={80}>2028</MenuItem>
            <MenuItem value={90}>2029</MenuItem>
            <MenuItem value={100}>2030</MenuItem>
            <MenuItem value={110}>2031</MenuItem>
            <MenuItem value={120}>2032</MenuItem>
            <MenuItem value={130}>2033</MenuItem>
            <MenuItem value={140}>2034</MenuItem>
            <MenuItem value={150}>2035</MenuItem>
            <MenuItem value={160}>2036</MenuItem>
            <MenuItem value={170}>2037</MenuItem>
            <MenuItem value={180}>2038</MenuItem>
            <MenuItem value={190}>2039</MenuItem>
            <MenuItem value={200}>2040</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

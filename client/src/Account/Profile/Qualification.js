import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

//Date Component
import Date from "../../components/DatePicker/Date"
import Selector from "../../components/Education/Education"
export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
          <Selector />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="College Name"
            name="College Name"
            label="College Name"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="City"
            name="City"
            label="City"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="State"
            name="State"
            label="State"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div >
            <Date />
          </div>
       </Grid>   

       <Grid item xs={12} sm={6}>
          <TextField
            required
            id="grade"
            name="grade"
            label="CGPA"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
       <Grid item xs={12} sm={6}>
           <TextareaAutosize
      aria-label="minimum height"
      rows={9}
      placeholder="About Yourself"
      style={{width:"100%"}}
    />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

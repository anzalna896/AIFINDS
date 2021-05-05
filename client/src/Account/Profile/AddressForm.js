import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Uploader from './photo/uploader';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        
         
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-basic"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-basic"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            name="address"
            label="Address"
            fullWidth
            autoComplete="billing address-line"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-basic"
            name="Phone"
            label="Phone"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-basic"
            name="Email"
            label="Email"
            fullWidth
          />
        </Grid>  
          <Grid item xs={12} sm={6}>
             <Uploader/>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}

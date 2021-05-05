import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
//import Selector from "../../components/Selector/Selector";
//import SkillSelector from "../../components/SkillSelector/Mul"

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Project Name"
            name="Project Name"
            label="Project Name"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextareaAutosize
            aria-label="empty textarea"
            rows={9}
            placeholder="Description of your project"
            style={{ width: "100%",height:150 }}
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}

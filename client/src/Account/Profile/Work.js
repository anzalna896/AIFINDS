import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

//Components
import Selector from "../../components/Selector/Selector"
import SkillSelector from "../../components/SkillSelector/Mul"

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Designation"
            name="Designation"
            label="Designation"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Organisation"
            name="Organisation"
            label="Organisation"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Selector />
        </Grid>
        <Grid item xs={12} sm={6} style={{marginTop:"1em"}}>
          <SkillSelector/>
        </Grid>
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
            placeholder="Description of projects done"
            style={{ width: "100%"}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

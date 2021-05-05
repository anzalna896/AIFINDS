import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

//Components
import Selector from "../../components/Selector/Selector";
import SkillSelector from "../../components/SkillSelector/Mul";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={12}>
          <SkillSelector />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBoxInput = (props) => {
  return (
    <FormGroup aria-label="position" row>
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={props.value}
            onChange={props.handleChange}
            name={props.name}
            disabled={props.disable}
          />
        }
        label={props.label}
        labelPlacement={props.labelPlacement}
      />
    </FormGroup>
  );
};
export default CheckBoxInput;

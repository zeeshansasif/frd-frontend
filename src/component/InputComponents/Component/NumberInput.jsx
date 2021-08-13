import React from "react";
import TextField from "@material-ui/core/TextField";

function NumberInput(props) {
  return (
    <TextField
      id="standard-number"
      label="Number"
      type="number"
      value={props.value}
      onChange={props.handleChange}
      name={props.name}
      disabled={props.disable}
    />
  );
}
export default NumberInput;

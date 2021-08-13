import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
  return (
    <TextField
      id="standard-multiline-flexible"
      label={props.label}
      multiline={props.multiline}
      maxRows={props.maxRows}
      value={props.value}
      name={props.name}
      onChange={props.handleChange}
      disabled={props.disable}
      error={props.error}
    />
  );
};
export default Input;

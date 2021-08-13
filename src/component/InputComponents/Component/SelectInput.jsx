import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const SelectInput = (props) => {
  return (
    <React.Fragment>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.selectValue}
        onChange={props.handleChange}
        name={props.name}
        fullWidth
        disabled={props.disable}
      >
        {(props.menuItems || []).map((item, index) => (
          <MenuItem value={item.value} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default SelectInput;

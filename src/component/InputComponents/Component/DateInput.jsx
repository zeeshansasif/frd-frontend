// import "date-fns";
// import React from "react";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// const DateInput = (props) => {
//   // The first commit of Material-UI

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         disableToolbar
//         variant={props.variant}
//         format="MM/dd/yyyy"
//         margin="normal"
//         id="date-picker-inline"
//         label={props.label}
//         value={props.selectDate}
//         onChange={props.handleOnChange}
//         KeyboardButtonProps={{
//           "aria-label": "change date",
//         }}
//         name={props.name}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };
// export default DateInput;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DateInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      id="date"
      label={props.label}
      type="date"
      defaultValue="2021-08-14"
      className={classes.textField}
      variant={props.variant}
      name={props.name}
      onChange={props.handleOnChange}
    />
  );
};
export default DateInput;

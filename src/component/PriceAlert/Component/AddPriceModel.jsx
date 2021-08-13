import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import {
  placementTypes,
  placementConditions,
} from "../../../Constants/Constants";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SelectInput from "../../InputComponents/Component/SelectInput";
import NumberInput from "../../InputComponents/Component/NumberInput";
import DateInput from "../../InputComponents/Component/DateInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  symbolTable: {
    marginBottom: theme.spacing(5),
  },
}));
const AddPriceModel = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    alertSymbol: "",
    type: "",
    condition: "",
    value: "",
    expiration: new Date(),
  });
  const [error, setError] = useState({
    alertSymbol: false,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
    setError({
      ...error,
      alertSymbol: false,
    });
  }
  function submit() {
    if (!state.alertSymbol || Object.keys(state.alertSymbol).length === 0) {
      setError({
        ...error,
        alertSymbol: true,
      });
      return false;
    }
    const data = {
      status: "New",
      created: moment().format("m/d/yyyy h:mm:ss"),
      condition: state.condition,
      symbol: state.alertSymbol.title,
      type: state.type,
      value: state.value,
      expiration: moment(state.expiration).format("m/d/yyyy h:mm:ss"),
    };
    console.log(data);
    props.add_new_price_alert(data);
  }
  console.log(state);
  return (
    <div>
      <Dialog
        open={props.modelOpen}
        onClose={props.ModelClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Add Alert
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            <Grid container direction="column" justifyContent="flex-start">
              <Grid item xs={12}>
                <FormControl variant="standard" className={classes.formControl}>
                  <AutoCompleteInput
                    label={"Symbol"}
                    variant="standard"
                    name="alertSymbol"
                    value={state.alertSymbol}
                    handleChangeAutoComplete={handleChangeAutoComplete}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" className={classes.formControl}>
                  <SelectInput
                    label={"Type"}
                    selectValue={state.type}
                    handleChange={handleChange}
                    menuItems={placementTypes}
                    name="type"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" className={classes.formControl}>
                  <SelectInput
                    label={"Condition"}
                    selectValue={state.condition}
                    handleChange={handleChange}
                    menuItems={placementConditions}
                    name="condition"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" className={classes.formControl}>
                  <NumberInput
                    label={"Value"}
                    selectValue={state.value}
                    handleChange={handleChange}
                    name="value"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" className={classes.formControl}>
                  <DateInput
                    label={"Expiration"}
                    selectDate={state.expiration}
                    handleChange={handleChange}
                    name="expiration"
                    variant="standard"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit} color="primary">
            Ok
          </Button>
          <Button onClick={props.ModelClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddPriceModel;

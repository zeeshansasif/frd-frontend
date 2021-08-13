import React, { useState } from "react";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SelectInput from "../../InputComponents/Component/SelectInput";
import DateInput from "../../InputComponents/Component/DateInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orderStatuses, orderTypes } from "../../../Constants/Constants";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const OrderForm = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    stockSymbol: null,
    orderStatus: "",
    orderType: "",
    fromDate: null,
    toDate: null,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleChangeAutoComplete = ({ name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={2}>
        <FormControl variant="standard" className={classes.formControl}>
          <AutoCompleteInput
            label={"Symbol"}
            variant="standard"
            name="stockSymbol"
            value={state.stockSymbol}
            handleChangeAutoComplete={handleChangeAutoComplete}
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="standard" className={classes.formControl}>
          <SelectInput
            label={"Order Status"}
            selectValue={state.orderStatus}
            handleChange={handleChange}
            menuItems={orderStatuses}
            name="orderStatus"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="standard" className={classes.formControl}>
          <SelectInput
            label={"Order Type"}
            selectValue={state.orderType}
            handleChange={handleChange}
            menuItems={orderTypes}
            name="orderType"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="standard" className={classes.formControl}>
          <DateInput
            label={"From"}
            selectDate={state.fromDate}
            handleChange={handleChange}
            name="fromDate"
            variant="standard"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="standard" className={classes.formControl}>
          <DateInput
            label={"To"}
            selectDate={state.toDate}
            handleChange={handleChange}
            name="toDate"
            variant="standard"
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default OrderForm;

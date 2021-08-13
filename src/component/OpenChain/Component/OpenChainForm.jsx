import React, { useState } from "react";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SelectInput from "../../InputComponents/Component/SelectInput";
import CheckBoxInput from "../../InputComponents/Component/CheckBoxInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  strikeRange,
  expirationType,
  expiration,
} from "../../../Constants/Constants";
import SymbolTable from "./SymbolTable";
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
const OpenChainForm = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    stockSymbol: null,
    strikeRange: "",
    expirationType: "",
    expiration: "",
    stockTrade: false,
    quantity: 100,
    actionValue: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleOnChecked = (event) => {
    const { name, checked } = event.target;
    setState({ ...state, [name]: checked });
  };
  const handleChangeAutoComplete = ({ name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const data = [
    {
      last: 364.25,
      price: 363.68,
      chg: -3.59,
      chgPer: -0.98,
      bid: 360.9,
      ask: 364.0,
      high: 369.96,
      low: 363.75,
      mark: 364.24,
      volume: 3268283,
    },
  ];
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
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
              label={"Strike Range"}
              selectValue={state.strikeRange}
              handleChange={handleChange}
              menuItems={strikeRange}
              name="strikeRange"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Expiration Type"}
              selectValue={state.expirationType}
              handleChange={handleChange}
              menuItems={expirationType}
              name="expirationType"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Expiration"}
              selectValue={state.expiration}
              handleChange={handleChange}
              menuItems={expiration}
              name="expiration"
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <CheckBoxInput
              label={"Add stock to Trade ticket"}
              value={state.stockTrade}
              handleChange={handleOnChecked}
              name="stockTrade"
              variant="standard"
              labelPlacement="end"
            />
          </FormControl>
        </Grid>
      </Grid>
      {state.stockSymbol ? (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          className={classes.symbolTable}
        >
          <SymbolTable
            data={data}
            stockTrade={state.stockTrade}
            quantity={state.quantity}
            handleChange={handleChange}
            actionValue={state.actionValue}
          />
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

export default OpenChainForm;

import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SecurityLists from "./SecurityLists";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  typo: {
    float: "right",
    marginTop: "25px",
  },
}));
const data = [
  { label: "Last", value: 0.0 },
  {
    label: "Last Size",
    value: 0,
  },
  {
    label: "Change",
    value: 0.0,
  },
  {
    label: "Change %",
    value: 0.0,
  },
  {
    label: "Bid",
    value: 0.0,
  },
  {
    label: "Bid Size",
    value: 0,
  },
  {
    label: "Ask",
    value: 0.0,
  },
  {
    label: "Ask Size",
    value: 0,
  },
  {
    label: "Volume",
    value: 0,
  },
  {
    label: "Open",
    value: 0.0,
  },
  { label: "Close", value: 0.0 },
  { label: "Day Range", value: "0.00 - 0.00" },
  { label: "52 Week Low - High", value: "0.00 - 0.00" },
  { label: "Timestamp", value: "12/31/1969 19:00:00" },
  { label: "Ask Exchange", value: "" },
  { label: "Bid Exchange", value: "" },
  { label: "Last Exchange", value: "" },
];
function SecurityInfo(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    stockSymbol: null,
  });
  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div className="widget-main">
      <div className="widget-head">
        <span className="title"> Security Info </span>
        <div className="widget-controls">
          <PresentToAllIcon />
          <SettingsIcon />
          <CheckBoxOutlineBlankIcon />
          <CloseIcon />
        </div>
      </div>
      <div className="widget-body">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
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
        </Grid>
        <SecurityLists data={data} />
        {/* <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" color="primary">
            Trade
          </Button>
        </Grid> */}
      </div>
    </div>
  );
}

export default SecurityInfo;

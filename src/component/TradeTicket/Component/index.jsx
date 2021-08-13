import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Button } from "@material-ui/core";
import TradeTicketForm from "./TradeTicketForm";
import TradeTicketDatatable from "./TradeTicketDatatable";

function TradeTickets(props) {
  const [state, setState] = useState({
    stockSymbol: null,
    selectStrategy: "",
    orderType: "",
    comment: "",
    selectDuration: "",
    extendedHour: "",
    exchange: "",
    placementCondition: false,
    checkAll: false,
    placementStockSymbol: null,
    type: "",
    condition: "",
    threshold: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function handleOnCheck(event) {
    const { name, checked } = event.target;
    setState({ ...state, [name]: checked });
  }

  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <React.Fragment>
      <div className="widget-main">
        <div className="widget-head">
          <span className="title"> Trade Tickets </span>
          <div className="widget-controls">
            <PresentToAllIcon />
            <SettingsIcon />
            <CheckBoxOutlineBlankIcon />
            <CloseIcon />
          </div>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}>
            <div className="widget-body">
              <TradeTicketForm
                handleChange={handleChange}
                handleChangeAutoComplete={handleChangeAutoComplete}
                state={state}
                handleOnCheck={handleOnCheck}
              />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Button variant="contained" color="primary">
                    Buy
                  </Button>
                  <Button variant="contained" color="primary">
                    Sell
                  </Button>
                  <Button variant="contained" color="primary">
                    Sell Short
                  </Button>
                  <Button variant="contained" color="primary">
                    Buy To Cover
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <TradeTicketDatatable />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default TradeTickets;

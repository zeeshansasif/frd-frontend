import React, { useState } from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Button } from "@material-ui/core";
import AddPriceModel from "./AddPriceModel";
const data = [
  {
    id: 1,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 2,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 3,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 4,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 5,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 6,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 7,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
  {
    id: 8,
    status: "Expired",
    created: "07/12/2021 13:48:15",
    condition: "less or equal",
    symbol: "AAPL",
    type: "Bid",
    value: "134.45",
    expiration: "07/13/2021 13:48:04",
  },
];
const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Created",
    selector: "created",
    sortable: true,
    right: true,
  },
  {
    name: "Condition",
    selector: "condition",
    sortable: true,
    right: true,
  },
  {
    name: "Symbol",
    selector: "symbol",
    sortable: true,
    right: true,
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
    right: true,
  },
  {
    name: "Value",
    selector: "value",
    sortable: true,
    right: true,
  },
  {
    name: "Expiration",
    selector: "expiration",
    sortable: true,
    right: true,
  },
];

function PriceAlertDatatable(props) {
  const [tableRecord, setTableRecord] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  function add_new_price_alert(data) {
    data.id = (tableRecord || []).length + 1;
    setTableRecord([data, ...tableRecord]);
    setOpenModal(false);
  }
  function ModelClose() {
    setOpenModal(false);
  }
  return (
    <React.Fragment>
      <div className="widget-main">
        <div className="widget-head">
          <span className="title"> Price Alert </span>
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenModal(true)}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <DataTable columns={columns} data={tableRecord} />
        </div>
      </div>
      <AddPriceModel
        modelOpen={openModal}
        ModelClose={ModelClose}
        add_new_price_alert={add_new_price_alert}
      />
    </React.Fragment>
  );
}

export default PriceAlertDatatable;

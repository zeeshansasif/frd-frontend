import React from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import OrderForm from "./OrderForm";
import { Grid } from "@material-ui/core";

const data = [
  {
    id: 1,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 2,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 3,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 4,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 5,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 6,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 7,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
  {
    id: 8,
    Symbol: "AAPL",
    description: "1982",
    price: "134.45",
    last: "145.6",
    bid: "143",
    ask: "123",
    change: "-23",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
    right: true,
  },
  {
    name: "Last",
    selector: "last",
    sortable: true,
    right: true,
  },
  {
    name: "Bid",
    selector: "bid",
    sortable: true,
    right: true,
  },
  {
    name: "Ask",
    selector: "ask",
    sortable: true,
    right: true,
  },
  {
    name: "Change",
    selector: "change",
    sortable: true,
    right: true,
  },
  {
    name: "Change",
    selector: "change",
    sortable: true,
    right: true,
  },
];

const OrderDatatable = (props) => {
  return (
    <div className="widget-main">
      <div className="widget-head">
        <span className="title"> Orders </span>
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
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <OrderForm />
        </Grid>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default OrderDatatable;

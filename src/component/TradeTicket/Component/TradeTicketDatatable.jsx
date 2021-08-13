import React from "react";
import DataTable from "react-data-table-component";
const data = [
  {
    id: 1,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 2,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 3,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 4,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 5,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 6,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 7,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
  {
    id: 8,
    Symbol: "AAPL",
    change: "-23",
    last: "145.6",
    bid: "143",
    ask: "123",
    volume: "25.3",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
  },
  {
    name: "Change",
    selector: "change",
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
    name: "Volume",
    selector: "volume",
    sortable: true,
    right: true,
  },
];

const TradeTicketDatatable = (props) => {
  return <DataTable columns={columns} data={data} />;
};

export default TradeTicketDatatable;

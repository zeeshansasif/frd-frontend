import React, { useState, useEffect } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";
import OptionTicketDatatable from "./OptionTicketDatatable";
import OptionTicketForm from "./OptionTicketForm";
import OptionTicketFooter from "./OptionTicketFooter";
const data = [
  {
    legType: "Option",
    action: "Buy To Open",
    qty: 1,
    expiry: "Aug 2021",
    strike: 160,
    callPut: "Put",
    bid: 4.4,
    ask: 4.6,
  },
  {
    legType: "Option",
    action: "Sell To Open",
    qty: 1,
    expiry: "Aug 2021",
    strike: 165,
    callPut: "Put",
    bid: 7.9,
    ask: 8.2,
  },
  {
    legType: "Option",
    action: "Sell To Open",
    qty: 1,
    expiry: "Aug 2021",
    strike: 170,
    callPut: "Put",
    bid: 12.0,
    ask: 12.6,
  },
];
function OptionTickets(props) {
  const [state, setState] = useState({
    stockSymbol: null,
    selectStrategy: "",
  });
  const [tableData, setTableData] = useState([]);

  const [footerState, setFooterState] = useState({
    checkAll: false,
    placementCondition: false,
    orderType: "",
    comment: "",
    selectDuration: "",
    placementStockSymbol: null,
    type: "",
    condition: "",
    threshold: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function handleChangeFooter(event) {
    const { name, value } = event.target;
    setFooterState({ ...footerState, [name]: value });
  }
  function handleOnCheck(event) {
    const { name, checked } = event.target;
    console.log(name, checked);
    setFooterState({ ...footerState, [name]: checked });
  }

  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
  }
  function handleChangeAutoCompleteFooter({ name, value }) {
    setFooterState({
      ...state,
      [name]: value,
    });
  }
  useEffect(() => {
    if (state.selectStrategy) {
      setTableData(data);
    } else {
      setTableData([]);
    }
  }, [state.selectStrategy]);

  function add_option() {
    const data = {
      legType: "Option",
      action: "",
      qty: "",
      expiry: "",
      strike: "",
      callPut: "",
      bid: "",
      ask: "",
      key: "option",
    };
    setTableData([data, ...tableData]);
  }
  function add_stock() {
    const data = {
      legType: "Stock",
      action: "",
      qty: 100,
      expiry: "",
      strike: "",
      callPut: "",
      bid: "",
      ask: "",
      key: "stock",
    };
    const data1 = {
      legType: "",
      action: "",
      qty: 1,
      expiry: "Spreads",
      strike: "",
      callPut: "",
      bid: "",
      ask: "",
      key: "stockend",
    };
    setTableData([data, ...tableData, data1]);
  }
  function clearStrategy() {
    setState({
      ...state,
      selectStrategy: "",
    });
  }
  function removeRow(index, key) {
    if (key && key === "stock") {
      setTableData(
        tableData.filter(
          (item, ind) => item.key !== "stock" && item.key !== "stockend"
        )
      );
    } else {
      setTableData(tableData.filter((item, ind) => index !== ind));
    }
  }
  function handleOnChangeTable(e, itemIndex) {
    const { name, value } = e.target;
    setTableData(
      tableData.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      })
    );
  }
  return (
    <React.Fragment>
      <div className="widget-main">
        <div className="widget-head">
          <span className="title"> Open Tickets </span>
          <div className="widget-controls">
            <PresentToAllIcon />
            <SettingsIcon />
            <CheckBoxOutlineBlankIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="widget-body">
          <OptionTicketForm
            handleChange={handleChange}
            handleChangeAutoComplete={handleChangeAutoComplete}
            state={state}
          />
          <Grid container>
            <OptionTicketDatatable
              selectStrategy={state.selectStrategy}
              removeStrategy={clearStrategy}
              handleChange={handleOnChangeTable}
              data={tableData}
              add_option={add_option}
              add_stock={add_stock}
              removeRow={removeRow}
            />
          </Grid>
          <Grid container>
            <OptionTicketFooter
              handleChange={handleChangeFooter}
              state={footerState}
              stockSymbol={state.stockSymbol}
              handleOnCheck={handleOnCheck}
              handleChangeAutoCompleteFooter={handleChangeAutoCompleteFooter}
            />
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OptionTickets;

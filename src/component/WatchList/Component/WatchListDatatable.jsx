import React, { useState } from "react";
import DataTable from "react-data-table-component";
import SettingsIcon from "@material-ui/icons/Settings";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import FloatButton from "../../InputComponents/Component/FloatButton";
import SelectInput from "../../InputComponents/Component/SelectInput";
import { watchList } from "../../../Constants/Constants";
import WatchListModel from "./WatchListModel";
const data = [
  {
    id: 1,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 2,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 3,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 4,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 5,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 6,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 7,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
  {
    id: 8,
    symbol: "AAPL",
    description: "Apple Inc.",
    price: "149.2",
    last: "134.45",
    bid: "145.6",
    ask: "143",
    change: "0.34",
    changePer: "0.23",
  },
];
const columns = [
  {
    name: "Symbol",
    selector: "symbol",
    sortable: true,
  },
  {
    name: "Descritpion",
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
    name: "Change %",
    selector: "change",
    sortable: true,
    right: true,
  },
];
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
function PositionDatatable(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    stockSymbol: null,
    watchList: "",
  });
  const [watchLists, setWatchLists] = useState(watchList);
  const [openModel, setOpenModel] = useState(false);
  const [modelName, setModelName] = useState("");

  function handleChangeAutoComplete({ name, value }) {
    setState({
      ...state,
      [name]: value,
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }
  function open_model(name) {
    setModelName(name);
    setOpenModel(true);
  }

  function add_new_watch_list(name) {
    setWatchLists([{ value: name, label: name, key: "new" }, ...watchLists]);
    setOpenModel(false);
  }
  function ModelClose() {
    setOpenModel(false);
  }
  function delete_watch_list(name) {
    setWatchLists(watchLists.filter((item) => item.value !== name));
    setOpenModel(false);
    setState({ stockSymbol: null, watchList: "" });
  }
  return (
    <React.Fragment>
      <div className="widget-main">
        <div className="widget-head">
          <span className="title"> Watchlist </span>
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
            <Grid item xs={2}>
              <FormControl variant="standard" className={classes.formControl}>
                <SelectInput
                  label={""}
                  selectValue={state.watchList}
                  handleChange={handleChange}
                  menuItems={watchLists}
                  name="watchList"
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FloatButton
                size={"small"}
                color="primary"
                handleOnClick={() => open_model("add")}
                name="add"
              />
              {(watchLists || []).filter(
                (item) => item.value === state.watchList && item.key === "new"
              ).length > 0 ? (
                <FloatButton
                  size={"small"}
                  color="danger"
                  handleOnClick={() => open_model("delete")}
                  name="delete"
                  disable={!state.watchList}
                />
              ) : null}
            </Grid>
            {(watchLists || []).filter(
              (item) => item.value === state.watchList && item.key === "new"
            ).length > 0 ? (
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
            ) : null}
          </Grid>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <WatchListModel
        modelOpen={openModel}
        ModelClose={ModelClose}
        add_new_watch_list={add_new_watch_list}
        delete_watch_list={delete_watch_list}
        name={modelName}
        watchList={state.watchList}
      />
    </React.Fragment>
  );
}

export default PositionDatatable;

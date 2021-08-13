import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
// import TradingChart from "./TradingChart";
import Chart from "../../Chart/index";
import Orders from "../../Orders/index";
import OpenChain from "../../OpenChain/index";
import OptionTicket from "../../OptionTicket/index";
import Positions from "../../Positions/index";
import PriceAlert from "../../PriceAlert/index";
import SecurityInfo from "../../SecurityInfo/index";
import WatchList from "../../WatchList/index";
import TradeTicket from "../../TradeTicket/index";
import AddWidget from "./AddWidget";
const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const DashboardSection = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="widget-tabs">
      <AddWidget handleChange={handleChange} />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Chart" {...a11yProps(0)} />
            <Tab label="Orders" {...a11yProps(1)} />
            <Tab label="Option chain" {...a11yProps(2)} />
            <Tab label="Option ticket" {...a11yProps(3)} />
            <Tab label="Positions" {...a11yProps(4)} />
            <Tab label="Price Alerts" {...a11yProps(5)} />
            {/* <Tab label="Probability Calculator" {...a11yProps(6)} />
            <Tab label="P&L Calculator" {...a11yProps(7)} /> */}
            <Tab label="Security Info" {...a11yProps(8)} />
            <Tab label="Watchlists" {...a11yProps(9)} />
            <Tab label="Trade Ticket" {...a11yProps(10)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Chart />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Orders />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OpenChain />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <OptionTicket />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Positions />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <PriceAlert />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <SecurityInfo />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <WatchList />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <TradeTicket />
        </TabPanel>
        <TabPanel value={value} index={9}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={10}>
          Item Seven
        </TabPanel>
      </div>
    </div>
  );
};

export default DashboardSection;

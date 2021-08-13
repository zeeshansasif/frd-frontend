import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const DashboadChart = () => (
  <TradingViewWidget
    width={"100%"}
    heigth={400}
    symbol="NASDAQ:AAPL"
    theme={Themes.LIGHT}
    locale="en"
    // autosize
  />
);
export default DashboadChart;

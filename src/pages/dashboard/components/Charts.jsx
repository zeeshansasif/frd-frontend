import React from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { StocksUtility } from "./StocksUtility.js";

class FinancialChartStockIndexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getStockData(),
    };
  }
  getStockData = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const dateEnd = new Date(year, month, 1);
    const dateStart = new Date(year - 2, month, 1);
    return StocksUtility.GetStocksBetween(dateStart, dateEnd);
  };
  render() {
    IgrFinancialChartModule.register();
    return (
      <div className="container sample" style={{ height: "1000px" }}>
        <div className="container">
          <IgrFinancialChart
            width="100%"
            height="100%"
            isToolbarVisible={true}
            chartType="Candle"
            chartTitle="S&P 500"
            titleAlignment="Left"
            titleLeftMargin="25"
            titleTopMargin="10"
            titleBottomMargin="10"
            subtitle="CME - CME Delayed Price, Currency in USD"
            subtitleAlignment="Left"
            subtitleLeftMargin="25"
            subtitleTopMargin="5"
            subtitleBottomMargin="10"
            yAxisLabelLocation="OutsideLeft"
            yAxisMode="Numeric"
            yAxisTitle="Financial Prices"
            yAxisTitleLeftMargin="10"
            yAxisTitleRightMargin="5"
            yAxisLabelLeftMargin="0"
            zoomSliderType="None"
            crosshairsDisplayMode="Both"
            crosshairsAnnotationEnabled={true}
            dataSource={this.state.data}
          />
        </div>
      </div>
    );
  }
}

// rendering above class to the React DOM
export default FinancialChartStockIndexChart;

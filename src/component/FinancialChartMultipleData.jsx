import React, { Component } from 'react'
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
//import { StocksUtility } from './StocksUtility';


export default class FinancialChartMultipleData extends Component {

    constructor(props) {
        super(props);
         //this.initData();
    }

    // public initData() {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = today.getMonth();
    //     const dateEnd = new Date(year, month, 1);
    //     const dateStart = new Date(year - 1, month, 1);

    //     this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    // }

    render() {
        return (
            <div>
                 <div className="container sample" >
                <div className="container">
                    <IgrFinancialChart
                        width="100%"
                        height="100%"
                        chartType="Candle"
                        zoomSliderType="Candle"
                        volumeType="Area"
                        overlayBrushes="rgba(5, 138, 0, 0.17)"
                        overlayOutlines="rgba(5, 138, 0, 0.4)"
                        overlayThickness={1}
                        dataSource={this.data} />
                </div>
            </div>
            </div>
        )
    }
}

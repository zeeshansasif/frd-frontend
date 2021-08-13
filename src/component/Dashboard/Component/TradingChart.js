import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingChart = () => (
    <TradingViewWidget
        width={980}
        heigth={800}
        symbol="NASDAQ:AAPL"
        theme={Themes.LIGHT}
        locale="fr"
    // autosize

    />
);
export default TradingChart
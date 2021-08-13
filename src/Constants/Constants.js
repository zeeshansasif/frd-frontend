export const strikeRange = [{ value: "+/-5", label: "+/-5" },
{ value: "+/-10", label: "+/-10" },
{ value: "+/-15", label: "+/-15" },
{ value: "+/-20", label: "+/-20" },
{ value: "+/-25", label: "+/-25" },
{ value: "+/-50", label: "+/-50" },
{ value: "All", label: "All" }];

export const expirationType = [{ value: "All", label: "All" },
{ value: "Flex", label: "Flex" },
{ value: "Mini", label: "Mini" },
{ value: "Quarterly", label: "Quarterly" },
{ value: "Regular", label: "Regular" },
{ value: "Undefined", label: "Undefined" },
{ value: "Weekly", label: "Weekly" }]

export const expiration = [{ value: "All", label: "All" },
{ value: "Aug 2021", label: "Aug 2021" },
{ value: "Sep 2021", label: "Sep 2021" },
{ value: "Nov 2021", label: "Nov 2021" },
{ value: "Jan 2022", label: "Jan 2022" },
{ value: "feb 2022", label: "feb 2022" },
{ value: "Jan 2023", label: "Jan 2023" }];
export const orderStatuses = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Historical", label: "Historical" },
    { value: "Accepted For Bidding", label: "Accepted For Bidding" },
    { value: "Held", label: "Held" },
    { value: "Canceled", label: "Canceled" },
    { value: "Done For Day", label: "Done For Day" },
    { value: "Error", label: "Error" },
    { value: "Expired", label: "Expired" },
    { value: "Filled", label: "Filled" },
    { value: "New", label: "New" },
    { value: "Partially Filled", label: "Partially Filled" },
    { value: "Pending Cancel", label: "Pending Cancel" },
    { value: "Pending New", label: "Pending New" },
    { value: "Pending Replace", label: "Pending Replace" },
    { value: "Rejected", label: "Rejected" },
    { value: "Replaced", label: "Replaced" },
    { value: "Stoped", label: "Stoped" },
    { value: "Suspended", label: "Suspended" },
];
export const orderTypes = [
    { value: "All", label: "All" },
    { value: "Market", label: "Market" },
    { value: "Limit", label: "Limit" },
    { value: "Stop", label: "Stop" },
    { value: "Stop Limit", label: "Stop Limit" },
    { value: "Trailing Stop", label: "Trailing Stop" },
    { value: "Trailing Stop Limit", label: "Trailing Stop Limit" },
];
export const openChainAction = [{ value: '', label: '' }, { value: 'Buy', label: 'Buy' }, { value: 'Sell', label: 'Sell' }, { value: 'Sell Short', label: 'Sell Short' }, { value: 'Buy To Cover', label: 'Buy To Cover' }]
export const strategy = [{ value: '', label: 'choose a strategy' }, { value: 'Bear Call Ladder', label: 'Bear Call Ladder' }, { value: 'Bear Call Spread', label: 'Bear Call Spread' }, { value: 'Bear Put Ladder', label: 'Bear Put Ladder' }, { value: 'Bear Put Spread', label: 'Bear Put Spread' }, { value: 'Bull Call Ladder', label: 'Bull Call Ladder' }, { value: 'Bull Call Spread', label: 'Bull Call Spread' }, { value: 'Bull Put Ladder', label: 'Bull Put Ladder' }, { value: 'Bull Put Spread', label: 'Bull Put Spread' }, { value: 'Collar', label: 'Collar' }, { value: 'Covered Call', label: 'Covered Call' }, { value: 'Covered Put', label: 'Covered Put' }, { value: 'Long Call Butterfly', label: 'Long Call Butterfly' }, { value: 'Long Call Condor', label: 'Long Call Condor' }, { value: 'Long Combo', label: 'Long Combo' }, { value: 'Long Put Btterfly', label: 'Long Put Btterfly' }, { value: 'Long Put Condor', label: 'Long Put Condor' }, { value: 'Long Synthetic Future', label: 'Long Synthetic Future' }, { value: 'Ratio Call', label: 'Ratio Call' }, { value: 'Ratio Putt', label: 'Ratio Putt' }, { value: 'Short Call Butterfly', label: 'Short Call Butterfly' }, { value: 'Short Call Condor', label: 'Short Call Condor' }, { value: 'Short Combo', label: 'Short Combo' }, { value: 'Short Put Butterfly', label: 'Short Put Butterfly' }, { value: 'Short Put Condor', label: 'Short Put Condor' }, { value: 'Short Strangle', label: 'Short Strangle' }, { value: 'Short Synthetic Future', label: 'Short Synthetic Future' }, { value: 'Straddle', label: 'Straddle' }, { value: 'Strangle', label: 'Strangle' }, { value: 'Strap', label: 'Strap' }, { value: 'Strip', label: 'Strip' }, { value: 'Synhetic Cell', label: 'Synhetic Cell' }, { value: 'Synthetic Put', label: 'Synthetic Put' }]
export const openTicketAction = [{ value: '', label: '' }, { value: 'Buy To Open', label: 'Buy To Open' }, { value: 'Sell To Close', label: 'Sell To Close' }, { value: 'Sell To Open', label: 'Sell To Open' }, { value: 'Buy To Close', label: 'Buy To Close' }];
export const openTicketExpire = [{ value: '', label: '' }, { value: 'Aug 2021', label: 'Aug 2021' }, { value: 'Sep 2021', label: 'Sep 2021' }, { value: 'Nov 2021', label: 'Nov 2021' }, { value: 'Jan 2022', label: 'Jan 2022' }, { value: 'Feb 2022', label: 'Feb 2022' }, { value: 'Jan 2023', label: 'Jan 2023' }];
export const openTicketCallPut = [{ value: '', label: '' }, { value: 'Cell', label: 'Cell' }, { value: 'Put', label: 'Put' }];
export const orderType = [{ value: 'Market', label: 'Market' }, { value: 'Limit', label: 'Limit' }]
export const durationType = [{ value: 'Day', label: 'Day' }, { value: 'GTC', label: 'GTC' }]
export const placementTypes = [{ value: 'Last', label: 'Last' }, { value: 'Bid', label: 'Bid' }, { value: 'Ask', label: 'Ask' }]
export const placementConditions = [{ value: 'less or equal', label: 'less or equal' }, { value: 'greater or equal', label: 'greater or equal' }]
export const watchList = [{ value: 'My Stocks', label: 'My Stocks' }, { value: 'Forex', label: 'Forex' }, { value: 'Indices', label: 'Indices' }, { value: 'Stocks', label: 'Stocks' }, { value: 'Top 10 Gain NASDAQ', label: 'Top 10 Gain NASDAQ' }, { value: 'Top 10 Gain NySE', label: 'Top 10 Gain NySE' }, { value: 'Top 10 Loss NASDAQ', label: 'Top 10 Loss NASDAQ' }, { value: 'Top 10 Loss NYSE', label: 'Top 10 Loss NYSE' },]
export const extendedHours = [{ value: 'Auto', label: 'Auto' }, { value: 'Regular', label: 'Regular' }, { value: 'Pre-Market Only', label: 'Pre-Market Only' }, { value: 'Post-Market Only', label: 'Post-Market Only' }, { value: 'Pre-Market and Regular', label: 'Pre-Market and Regular' }, { value: 'Regular and Post-Market', label: 'Regular and Post-Market' }, { value: 'Pre-Market and Post-Market', label: 'Pre-Market and Post-Market' }, { value: 'All Sessions', label: 'All Sessions' },]
export const exchanges = [{ value: 'ARCA', label: 'ARCA' }, { value: 'Auto', label: 'Auto' }, { value: 'BATS', label: 'BATS' }, { value: 'EDGX', label: 'EDGX' }, { value: 'KNIGHT', label: 'KNIGHT' }, { value: 'MNGD', label: 'MNGD' }, { value: 'NSDQ', label: 'NSDQ' }, { value: 'NYSE', label: 'NYSE' }, { value: 'VIRTEX', label: 'VIRTEX' }]
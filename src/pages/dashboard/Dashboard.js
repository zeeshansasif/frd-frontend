import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import SettingsIcon from '@material-ui/icons/Settings';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import FinancialChartMultipleData from '../../component/FinancialChartMultipleData';
import TabPanel from './components/TabPanel'
import FinancialChartStockIndexChart from './components/Charts'
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
const options2 = ['option2', 'Squash and merge', 'Rebase and merge'];

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);
  const anchorRef2 = React.useRef(null);
  const anchorRef3 = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleToggle1 = () => {
    setOpen1((prevOpen) => !prevOpen);
  };
  const handleToggle2 = () => {
    setOpen2((prevOpen) => !prevOpen);
  };
  const handleToggle3 = () => {
    setOpen3((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleClose1 = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }
    setOpen1(false);
  };
  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }
    setOpen2(false);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="wrapper">
      <header id="header" className="header">
        <div className="header-col company-logo">
          <img src="./assets/images/logo.png" alt="" />
        </div>
        <div className="header-col app-type">
          <span> Demo </span>
        </div>

        <div className="header-col server-status">
          <ul className="server-status-list">
            <li className="server-status-list-item">
              <span className="status-label"> Server: </span>
              <span className="status-value highlighted-text"> connected </span>
            </li>
            <li className="server-status-list-item">
              <span className="status-label"> Quotes: </span>
              <span className="status-value"> delayed </span>
            </li>
            <li className="server-status-list-item">
              <span className="status-label"> Market: </span>
              <span className="status-value highlighted-text"> open </span>
            </li>
          </ul>
          <a href="#" className="real-time-link"> Get RealTime Data </a>
        </div>
        <div className="header-col settings">
          <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
            <span onClick={handleClick} aria-controls={open ? 'profile' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label=""
              aria-haspopup="menu"
              onClick={handleToggle}>{options2[selectedIndex]} <ArrowDropDownIcon /></span>
          </ButtonGroup>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="profile">
                      {options2.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <ButtonGroup variant="contained" color="primary" ref={anchorRef1} aria-label="split button">
            <span onClick={handleClick} aria-controls={open1 ? 'settings' : undefined}
              aria-expanded={open1 ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle1}>{options[selectedIndex]} <SettingsIcon /></span>
          </ButtonGroup>
          <Popper open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose1}>
                    <MenuList id="settings">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div className="header-col header-account-info">
          <div className="account">
            <span className="label"> Account </span>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef2} aria-label="split button">
              <span onClick={handleClick} aria-controls={open2 ? 'split-button-menu' : undefined}
                aria-expanded={open2 ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle2}>{options[selectedIndex]} <ArrowDropDownIcon /></span>
            </ButtonGroup>
            <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose2}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <div className="account-info-view">
            <ul className="account-list">
              <li className="acount-list-item">
                <span className="acount-info-label"> Net Liq Value </span>
                <span className="acount-info-value">0.00</span>
              </li>
              <li className="acount-list-item">
                <span className="acount-info-label"> Account Value </span>
                <span className="acount-info-value">100,000.00</span>
              </li>
              <li className="acount-list-item">
                <span className="acount-info-label"> Buying Power </span>
                <span className="acount-info-value">200,000.00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-col header-instrument">
          <table>
            <tr>
              <td>DIA</td>
              <td>349.85</td>
              <td>-1.59(-0.45%)</td>
            </tr>
            <tr>
              <td>QQQ</td>
              <td>367.84</td>
              <td>-1.59(-0.45%)</td>
            </tr>
            <tr>
              <td>SPY</td>
              <td>367.84</td>
              <td>-1.59(-0.45%)</td>
            </tr>
          </table>
        </div>

        <div className="header-col header-clock">
          <span> Clock </span>
        </div>
      </header>
      <div className="widget-tabs">
        <ButtonGroup variant="contained" color="primary" ref={anchorRef3} aria-label="split button">
          <span onClick={handleClick} aria-controls={open3 ? 'split-button-menu' : undefined}
            aria-expanded={open3 ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle3}>{"Add Widget"} <ArrowDropDownIcon /></span>
        </ButtonGroup>
        <Popper open={open3} anchorEl={anchorRef3.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
              <Tab label="Probability Calculator" {...a11yProps(6)} />
              <Tab label="P&L Calculator" {...a11yProps(7)} />
              <Tab label="Security Info" {...a11yProps(8)} />
              <Tab label="Watchlists" {...a11yProps(9)} />
              <Tab label="Trade Ticket" {...a11yProps(10)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <FinancialChartStockIndexChart />
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={8}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={9}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={10}>
            Item Seven
          </TabPanel>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState, useRef } from "react";
import {
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  ButtonGroup,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const AddWidget = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    props.handleChange(event, index);
    setOpen(false);
  };
  const widgets = [
    "Chart",
    "Orders",
    "Option chain",
    "Option ticket",
    "Positions",
    "Price Alerts",
    "Probability Calculator",
    "P&L Calculator",
    "Security Info",
    "Watchlists",
    "Trade Ticket",
  ];

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
      >
        <span
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {"Add Widget"} <ArrowDropDownIcon />
        </span>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {widgets.map((option, index) => (
                    <MenuItem
                      key={index}
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
    </React.Fragment>
  );
};
export default AddWidget;

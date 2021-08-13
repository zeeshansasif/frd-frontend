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
import SettingsIcon from "@material-ui/icons/Settings";

const SettingMenu = (props) => {
  const [open, setOpen] = useState(false);
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
  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
      >
        <span
          aria-controls={open ? "settings" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <SettingsIcon />
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
                <MenuList id="profile">
                  <MenuItem onClick={() => setOpen(false)}>settings</MenuItem>
                  <MenuItem onClick={() => setOpen(false)}>
                    Unpin header
                  </MenuItem>
                  <MenuItem onClick={() => setOpen(false)}>Language</MenuItem>
                  <MenuItem onClick={() => setOpen(false)}>
                    Lock layout
                  </MenuItem>
                  <MenuItem onClick={() => setOpen(false)}>Help</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
export default SettingMenu;

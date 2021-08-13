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
import ProfileSettings from "./Profile/ProfileSettings";
const ProfileMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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

  const model = () => {
    setOpen(false);
    setOpenModal(true);
  };
  const ModelClose = () => {
    setOpen(false);
    setOpenModal(false);
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
          aria-controls={open ? "profile" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label=""
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {"demo@user.com"} <ArrowDropDownIcon />
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
                  <MenuItem onClick={() => setOpen(false)}>
                    demo@user.com
                  </MenuItem>
                  <MenuItem onClick={model}>My Profile</MenuItem>
                  <MenuItem onClick={() => setOpen(false)}>Log off</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <ProfileSettings modelOpen={openModal} ModelClose={ModelClose} />
    </React.Fragment>
  );
};
export default ProfileMenu;

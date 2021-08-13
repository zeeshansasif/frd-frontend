import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatButton(props) {
  const classes = useStyles();

  return (
    <Fab
      size={props.size}
      color={props.color}
      aria-label="add"
      className={classes.margin}
      onClick={props.handleOnClick}
      disabled={props.disable}
    >
      {props.name === "add" ? (
        <AddIcon />
      ) : props.name === "delete" ? (
        <DeleteIcon />
      ) : (
        <AddIcon />
      )}
    </Fab>
  );
}

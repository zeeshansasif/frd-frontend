import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import Input from "../../InputComponents/Component/Input";
import { Grid, FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  symbolTable: {
    marginBottom: theme.spacing(5),
  },
}));
const WatchListModel = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    watchListName: "",
  });
  const [error, setError] = useState({
    watchListNameError: false,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setError({
      ...error,
      watchListNameError: false,
    });
  }

  function submit() {
    if (props.name === "add") {
      if (!state.watchListName) {
        setError({
          ...error,
          watchListNameError: true,
        });
        return false;
      }
      props.add_new_watch_list(state.watchListName);
    }
    if (props.name === "delete") {
      props.delete_watch_list(props.watchList);
    }
  }
  console.log(state);
  return (
    <div>
      <Dialog
        open={props.modelOpen}
        onClose={props.ModelClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {props.name === "add" ? "Create New Watch List" : ""}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            <Grid container direction="row" justifyContent="flex-start">
              <Grid item xs={12}>
                {props.name === "add" ? (
                  <FormControl
                    variant="standard"
                    className={classes.formControl}
                  >
                    <Input
                      label={"Name"}
                      selectValue={state.watchListName}
                      handleChange={handleChange}
                      name="watchListName"
                      error={error.watchListNameError}
                    />
                  </FormControl>
                ) : props.name === "delete" ? (
                  <Typography>
                    Are you sure to delete watchlist "{props.watchList}"
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit} color="primary">
            Ok
          </Button>
          <Button onClick={props.ModelClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default WatchListModel;

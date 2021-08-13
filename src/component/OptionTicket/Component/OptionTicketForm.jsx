import React, { memo } from "react";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SelectInput from "../../InputComponents/Component/SelectInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { strategy } from "../../../Constants/Constants";
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
function OptionTicketForm(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        // spacing={2}
      >
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInput
              label={"Symbol"}
              variant="standard"
              name="stockSymbol"
              value={props.state.stockSymbol}
              handleChangeAutoComplete={props.handleChangeAutoComplete}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={""}
              selectValue={props.state.selectStrategy}
              handleChange={props.handleChange}
              menuItems={strategy}
              name="selectStrategy"
              disable={!props.state.stockSymbol}
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default memo(OptionTicketForm);

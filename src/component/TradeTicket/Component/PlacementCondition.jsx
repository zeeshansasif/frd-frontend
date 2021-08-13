import React from "react";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import SelectInput from "../../InputComponents/Component/SelectInput";
import NumberInput from "../../InputComponents/Component/NumberInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  placementTypes,
  placementConditions,
} from "../../../Constants/Constants";
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
const PlacementCondition = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <AutoCompleteInput
              label={"Symbol"}
              variant="standard"
              name="placementStockSymbol"
              value={props.placementStockSymbol}
              handleChangeAutoComplete={props.handleChangeAutoCompleteFooter}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Type"}
              selectValue={props.type}
              handleChange={props.handleChange}
              menuItems={placementTypes}
              name="type"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Condition"}
              selectValue={props.condition}
              handleChange={props.handleChange}
              menuItems={placementConditions}
              name="condition"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <NumberInput
              label={"Threshold"}
              selectValue={props.threshold}
              handleChange={props.handleChange}
              name="threshold"
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PlacementCondition;

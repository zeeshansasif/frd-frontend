import React, { memo } from "react";
import SelectInput from "../../InputComponents/Component/SelectInput";
import CheckBoxInput from "../../InputComponents/Component/CheckBoxInput";
import Input from "../../InputComponents/Component/Input";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orderType, durationType } from "../../../Constants/Constants";
import PlacementCondition from "./PlacementCondition";
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
const OptionTicketFooter = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Order Type"}
              selectValue={props.state.orderType}
              handleChange={props.handleChange}
              menuItems={orderType}
              name="orderType"
              disable={!props.stockSymbol}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <Input
              label={"Comment"}
              value={props.state.comment}
              handleChange={props.handleChange}
              name="comment"
              maxRows={0}
              multiline={false}
              disable={!props.stockSymbol}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <SelectInput
              label={"Duration"}
              selectValue={props.state.selectDuration}
              handleChange={props.handleChange}
              menuItems={durationType}
              name="selectDuration"
              disable={!props.stockSymbol}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <CheckBoxInput
              label={"All or none"}
              value={props.state.checkAll}
              handleChange={props.handleOnCheck}
              name="checkAll"
              disable={!props.stockSymbol}
              labelPlacement="end"
            />
          </FormControl>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={2}>
            <FormControl variant="standard" className={classes.formControl}>
              <CheckBoxInput
                label={"Placement Condition"}
                value={props.state.placementCondition}
                handleChange={props.handleOnCheck}
                name="placementCondition"
                disable={!props.stockSymbol}
                labelPlacement="end"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      {props.state.placementCondition === true ? (
        <PlacementCondition
          placementStockSymbol={props.state.placementStockSymbol}
          handleChangeAutoCompleteFooter={props.handleChangeAutoCompleteFooter}
          type={props.state.type}
          condition={props.state.condition}
          handleChange={props.handleChange}
          threshold={props.state.threshold}
        />
      ) : null}
    </React.Fragment>
  );
};

export default memo(OptionTicketFooter);

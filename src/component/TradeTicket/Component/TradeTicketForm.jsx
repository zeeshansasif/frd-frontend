import React, { memo } from "react";
import SelectInput from "../../InputComponents/Component/SelectInput";
import CheckBoxInput from "../../InputComponents/Component/CheckBoxInput";
import AutoCompleteInput from "../../InputComponents/Component/AutoCompleteInput";
import Input from "../../InputComponents/Component/Input";
import NumberInput from "../../InputComponents/Component/NumberInput";
import { Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  orderType,
  durationType,
  extendedHours,
  exchanges,
} from "../../../Constants/Constants";
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
const TradeTicketForm = (props) => {
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
          <AutoCompleteInput
            label={"Symbol"}
            variant="standard"
            name="stockSymbol"
            value={props.state.stockSymbol}
            handleChangeAutoComplete={props.handleChangeAutoComplete}
          />
        </Grid>
        {props.state.stockSymbol ? (
          <Grid item xs={2}>
            <FormControl variant="standard" className={classes.formControl}>
              <NumberInput
                label={"Shares"}
                value={props.state.shares}
                handleChange={props.handleChange}
                name="shares"
              />
            </FormControl>
          </Grid>
        ) : null}
      </Grid>
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
              disable={!props.state.stockSymbol}
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
              disable={!props.state.stockSymbol}
            />
          </FormControl>
        </Grid>
      </Grid>
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
              label={"Duration"}
              selectValue={props.state.selectDuration}
              handleChange={props.handleChange}
              menuItems={durationType}
              name="selectDuration"
              disable={!props.state.stockSymbol}
            />
          </FormControl>
        </Grid>
        {props.state.stockSymbol ? (
          <React.Fragment>
            <Grid item xs={2}>
              <FormControl variant="standard" className={classes.formControl}>
                <SelectInput
                  label={"Extended Hours"}
                  selectValue={props.state.extendedHour}
                  handleChange={props.handleChange}
                  menuItems={extendedHours}
                  name="extendedHour"
                />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl variant="standard" className={classes.formControl}>
                <SelectInput
                  label={"Exchange"}
                  selectValue={props.state.exchange}
                  handleChange={props.handleChange}
                  menuItems={exchanges}
                  name="exchange"
                />
              </FormControl>
            </Grid>
          </React.Fragment>
        ) : null}
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.formControl}>
            <CheckBoxInput
              label={"All or none"}
              value={props.state.checkAll}
              handleChange={props.handleOnCheck}
              name="checkAll"
              disable={!props.state.stockSymbol}
              labelPlacement="end"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
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
              disable={!props.state.stockSymbol}
              labelPlacement="end"
            />
          </FormControl>
        </Grid>
      </Grid>
      {props.state.placementCondition === true ? (
        <PlacementCondition
          placementStockSymbol={props.state.placementStockSymbol}
          handleChangeAutoCompleteFooter={props.handleChangeAutoComplete}
          type={props.state.type}
          condition={props.state.condition}
          handleChange={props.handleChange}
          threshold={props.state.threshold}
        />
      ) : null}
    </React.Fragment>
  );
};

export default memo(TradeTicketForm);

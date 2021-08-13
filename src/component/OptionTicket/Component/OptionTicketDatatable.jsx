import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SelectInput from "../../InputComponents/Component/SelectInput";
import {
  openTicketAction,
  openTicketExpire,
  openTicketCallPut,
} from "../../../Constants/Constants";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    marginLeft: 2,
  },
});
let a = 60;
let striks = [{ value: "", label: "" }];
while (a < 200) {
  striks.push({ value: a, label: a });
  a++;
}

const OptionTicketDatatable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <caption>
          {(props.data || []).filter((item) => item.key !== undefined).length >
          0 ? null : (
            <React.Fragment>
              {" "}
              <Button
                variant="contained"
                color="primary"
                onClick={props.add_option}
              >
                Add option
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={props.add_stock}
              >
                Add stock
              </Button>
            </React.Fragment>
          )}
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Leg type</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Strike</TableCell>
            <TableCell>Call/Put</TableCell>
            <TableCell>
              <CloseIcon onClick={props.removeStrategy} />
            </TableCell>
            <TableCell>Bid</TableCell>
            <TableCell>Ask</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.data || []).map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.legType}
              </TableCell>
              <TableCell component="th" scope="row">
                <SelectInput
                  label={""}
                  selectValue={item.action}
                  handleChange={(e) => props.handleChange(e, index)}
                  menuItems={openTicketAction}
                  name="action"
                />
              </TableCell>

              <TableCell component="th" scope="row">
                {item.qty}
              </TableCell>
              <TableCell>
                {item.key === "stock" || item.key === "stockend" ? (
                  item.key === "stockend" ? (
                    "Spreads"
                  ) : null
                ) : (
                  <SelectInput
                    label={"Expiry"}
                    selectValue={item.expiry}
                    handleChange={(e) => props.handleChange(e, index)}
                    menuItems={openTicketExpire}
                    name="expiry"
                  />
                )}
              </TableCell>
              <TableCell>
                {item.key === "stock" || item.key === "stockend" ? null : (
                  <SelectInput
                    label={"Strike"}
                    selectValue={item.strike}
                    handleChange={(e) => props.handleChange(e, index)}
                    menuItems={striks}
                    name="strike"
                  />
                )}
              </TableCell>
              <TableCell>
                {item.key === "stock" || item.key === "stockend" ? null : (
                  <SelectInput
                    label={"Call/Put"}
                    selectValue={item.callPut}
                    handleChange={(e) => props.handleChange(e, index)}
                    menuItems={openTicketCallPut}
                    name="callPut"
                  />
                )}
              </TableCell>
              <TableCell>
                {item.key === "stockend" ? null : (
                  <CloseIcon onClick={() => props.removeRow(index, item.key)} />
                )}
              </TableCell>
              <TableCell>
                {" "}
                {item.key === "stockend"
                  ? null
                  : Number(item.bid).toLocaleString("en-US")}
              </TableCell>
              <TableCell>
                {" "}
                {item.key === "stockend"
                  ? null
                  : Number(item.ask).toLocaleString("en-US")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(OptionTicketDatatable);

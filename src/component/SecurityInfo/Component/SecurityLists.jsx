import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    color: "black",
  },
}));

export default function SecurityLists(props) {
  const classes = useStyles();
  const [dense] = useState(true);
  const [secondary] = useState(false);

  return (
    <Grid container direction="column" justifyContent="flex-start">
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Information
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            {(props.data || []).map((item, index) => (
              <ListItem>
                <ListItemText
                  primary={item.label}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    {item.value}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" color="primary">
            Trade
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

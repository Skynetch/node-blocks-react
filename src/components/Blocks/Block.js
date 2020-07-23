import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Box } from "@material-ui/core";
import colors from "../../constants/colors";

function Block({ data }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <span className={classes.id}>
        {data.id.toString().padStart(3, "0")}
      </span>
      <span className={classes.text}>
        {data.attributes.data}
      </span>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: () => ({
    backgroundColor: colors.blockBackground,
    borderRadius: "2px",
    marginBottom: "5px",
    padding: "5px",
  }),
  id: () => ({
    fontSize: theme.typography.pxToRem(10),
    fontWeight: "bold",
    display: "block",
    color: colors.blockId
  }),
  text: () => ({
    fontSize: theme.typography.pxToRem(12),
    fontWeight: "bold",
    display: "block",
    color: colors.text,
  }),
}));

Block.propTypes = {
  data: PropTypes.object
};

export default Block;

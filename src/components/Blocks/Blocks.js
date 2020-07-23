import React from "react";
import PropTypes from "prop-types";
import Block from "./Block";
import { Box, LinearProgress, Typography } from "@material-ui/core";

export class Blocks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blocks } = this.props;
    return (
      <Box width="100%">
        {blocks.loading && (<LinearProgress />)}
        {!blocks.loading && blocks.status && blocks.data.length > 0 && (blocks.data.map((block) => (
          <Block
            data={block}
            key={block.id}
          />
        )))}
        {!blocks.loading && blocks.status && blocks.data.length === 0 && (
          <Typography className="text-center">No Blocks</Typography>
        )}
        {!blocks.loading && !blocks.status && (
          <Typography className="text-center loss">Please check connection. Try again later!</Typography>
        )}
      </Box>
    );
  }
}

Blocks.propTypes = {
  blocks: PropTypes.object.isRequired,
};

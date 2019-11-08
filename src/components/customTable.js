import React from "react";
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";

const CustomTable = props => {
  const [keyOne, keyTwo] = Object.keys(props.rows[0]);
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="primary">{keyOne.toUpperCase()}</Typography>
          </TableCell>
          <TableCell>
            <Typography color="primary">{keyTwo.toUpperCase()}</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row, i) => (
          <TableRow key={i}>
            <TableCell>
              <Typography color="primary">{row[keyOne]}</Typography>
            </TableCell>
            <TableCell>
              <Typography color="primary">{row[keyTwo]}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

CustomTable.propTypes = {
  rows: PropTypes.array.isRequired
}
export default CustomTable;
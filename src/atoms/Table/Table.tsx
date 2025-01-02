import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface DecorMistriTableProps {
  data: Array<{
    name: string;
    service: string;
    phone: string;
    email: string;
    address: string;
  }>;
  rowBackgroundColor: string;
  headerBackgroundColor: string;
  headerTextColor: string;
  borderColor: string;
}

const DecorMistriTable: React.FC<DecorMistriTableProps> = ({
  data,
  rowBackgroundColor,
  headerBackgroundColor,
  headerTextColor,
  borderColor,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, borderColor: borderColor }}
        aria-label="decor mistri table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: headerBackgroundColor }}>
            <TableCell style={{ color: headerTextColor }}>Name</TableCell>
            <TableCell style={{ color: headerTextColor }}>Service</TableCell>
            <TableCell style={{ color: headerTextColor }}>Phone</TableCell>
            <TableCell style={{ color: headerTextColor }}>Email</TableCell>
            <TableCell style={{ color: headerTextColor }}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: rowBackgroundColor,
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DecorMistriTable;

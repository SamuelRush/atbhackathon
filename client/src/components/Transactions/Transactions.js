import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import customClass from "./transactions.module.scss";
// ---------------- STYLES ---------------- //
const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  table: {
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0px !important" : undefined
    }
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});
// ---------------- COMPONENT ---------------- //
class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };
  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };
  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? "right" : "left"}
      >
        {cellData}
      </TableCell>
    );
  };
  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };
  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit"
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}
MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number
};
const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);
const rows = [
  {
    id: 0,
    date: "2020-01-01",
    description: "ATB Insurance",
    amount: 97.12,
    category: "Housing"
  },
  {
    id: 1,
    date: "2020-01-01",
    description: "A&W",
    amount: 34.87,
    category: "Food"
  },
  {
    id: 2,
    date: "2020-01-02",
    description: "Ferrari - Lease",
    amount: 3120.32,
    category: "Vehicle"
  },
  {
    id: 3,
    date: "2020-01-02",
    description: "Local Dentist",
    amount: 32.87,
    category: "Health"
  },
  {
    id: 4,
    date: "2020-01-04",
    description: "Telus",
    amount: 234.87,
    category: "Entertainment"
  },
  {
    id: 5,
    date: "2020-01-04",
    description: "Enmax",
    amount: 297.9,
    category: "Housing"
  },
  {
    id: 6,
    date: "2020-01-04",
    description: "Netflix",
    amount: 9.99,
    category: "Entertainment"
  },
  {
    id: 7,
    date: "2020-01-05",
    description: "City of Calgary - Property Tax",
    amount: 337.35,
    category: "Housing"
  },
  {
    id: 8,
    date: "2020-01-06",
    description: "Esso",
    amount: 406.45,
    category: "Vehicle"
  },
  {
    id: 9,
    date: "2020-01-09",
    description: "Shoppers Drug Mart",
    amount: 43.89,
    category: "Health"
  },
  {
    id: 10,
    date: "2020-01-11",
    description: "Safeway",
    amount: 234.56,
    category: "Food"
  },
  {
    id: 11,
    date: "2020-01-11",
    description: "ATB Insurance",
    amount: 800.56,
    category: "Vehicle"
  },
  {
    id: 12,
    date: "2020-01-12",
    description: "Monthly Fee",
    amount: 9.99,
    category: "Fees"
  },
  {
    id: 13,
    date: "2020-01-12",
    description: "Starbucks",
    amount: 12.76,
    category: "Food"
  },
  {
    id: 14,
    date: "2020-01-14",
    description: "Shaw",
    amount: 149.9,
    category: "Entertainment"
  },
  {
    id: 15,
    date: "2020-01-15",
    description: "Canadian Tire",
    amount: 99.65,
    category: "Vehicle"
  },
  {
    id: 16,
    date: "2020-01-16",
    description: "Theatre Calgary",
    amount: 354.76,
    category: "Entertainment"
  },
  {
    id: 17,
    date: "2020-01-16",
    description: "Westjet",
    amount: 2300.12,
    category: "Travel"
  },
  {
    id: 18,
    date: "2020-01-16",
    description: "Fancy Hotel",
    amount: 342.56,
    category: "Travel"
  },
  {
    id: 19,
    date: "2020-01-17",
    description: "Hertz",
    amount: 231.0,
    category: "Travel"
  },
  {
    id: 20,
    date: "2020-01-17",
    description: "Hawaii Restaurant",
    amount: 78.9,
    category: "Travel"
  },
  {
    id: 21,
    date: "2020-01-19",
    description: "Costco",
    amount: 234.78,
    category: "Food"
  },
  {
    id: 22,
    date: "2020-01-20",
    description: "Life Insurance",
    amount: 90.67,
    category: "Health"
  },
  {
    id: 23,
    date: "2020-01-21",
    description: "Men Without Kilts",
    amount: 50.76,
    category: "Housing"
  },
  {
    id: 24,
    date: "2020-01-22",
    description: "Starbucks",
    amount: 12.76,
    category: "Food"
  },
  {
    id: 25,
    date: "2020-01-22",
    description: "Shoppers Drug Mart",
    amount: 12.32,
    category: "Health"
  },
  {
    id: 26,
    date: "2020-01-24",
    description: "ATB Mortgage",
    amount: 998.78,
    category: "Housing"
  },
  {
    id: 27,
    date: "2020-01-26",
    description: "Lake Louise Ski Resort",
    amount: 335.76,
    category: "Entertainment"
  },
  {
    id: 28,
    date: "2020-01-28",
    description: "Non Sufficient Funds Fee",
    amount: 25.0,
    category: "Fees"
  },
  {
    id: 29,
    date: "2020-01-30",
    description: "Visa - Annual Fee",
    amount: 100.21,
    category: "Fees"
  }
];
export default function ReactVirtualizedTable() {
  return (
    <div className={customClass.wrapperTran}>
      <h2 classname="customHeading">Transaction history</h2>
      <Paper className="transectionWrapper" style={{ height: 300, width: 650 }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          style={{ textAlign: "center" }}
          columns={[
            {
              width: 120,
              label: "Date",
              dataKey: "date"
            },
            {
              width: 200,
              label: "Description",
              dataKey: "description"
            },
            {
              width: 120,
              label: "Amount\u00A0($)",
              dataKey: "amount",
              numeric: true
            },
            {
              width: 120,
              label: "Category",
              dataKey: "category"
            }
          ]}
        />
      </Paper>
    </div>
  );
}
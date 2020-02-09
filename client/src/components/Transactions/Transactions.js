import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';


// ---------------- STYLES ---------------- //


//
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));
// const classes = useStyles();
//

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

// ---------------- COMPONENT ---------------- //
class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
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
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
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
              direction: 'inherit',
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
                      columnIndex: index,
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
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---


const rows = [
  { id: 0, date: '2020-01-19', description: 'Safeway', amount: 234.56, category: 'Food' },
  { id: 1, date: '2020-01-19', description: 'Esso', amount: 50.34, category: 'Gas' },
  { id: 2, date: '2020-01-20', description: 'Best Buy', amount: 2300.21, category: 'Consumer' },
  { id: 3, date: '2020-01-21', description: 'Costco', amount: 337.35, category: 'Food' },
  { id: 4, date: '2020-01-24', description: 'TD-Mortgage', amount: 998.78, category: 'Housing' },
  { id: 5, date: '2020-01-19', description: 'Safeway', amount: 234.56, category: 'Food' },
  { id: 6, date: '2020-01-19', description: 'Esso', amount: 50.34, category: 'Gas' },
  { id: 7, date: '2020-01-20', description: 'Best Buy', amount: 2300.21, category: 'Consumer' },
  { id: 8, date: '2020-01-21', description: 'Costco', amount: 337.35, category: 'Food' },
  { id: 9, date: '2020-01-24', description: 'TD-Mortgage', amount: 998.78, category: 'Housing' },
  { id: 10, date: '2020-01-19', description: 'Safeway', amount: 234.56, category: 'Food' },
  { id: 11, date: '2020-01-19', description: 'Esso', amount: 50.34, category: 'Gas' },
  { id: 12, date: '2020-01-20', description: 'Best Buy', amount: 2300.21, category: 'Consumer' },
  { id: 13, date: '2020-01-21', description: 'Costco', amount: 337.35, category: 'Food' },
  { id: 14, date: '2020-01-24', description: 'TD-Mortgage', amount: 998.78, category: 'Housing' },
]

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <h2>Transactions</h2>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 120,
            label: 'Date',
            dataKey: 'date',
          },
          {
            width: 200,
            label: 'Description',
            dataKey: 'description',
          },
          {
            width: 120,
            label: 'Amount\u00A0($)',
            dataKey: 'amount',
            numeric: true,
          },
          {
            width: 120,
            label: 'Category',
            dataKey: 'category',
          },
        ]}
      />
    </Paper>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../../components/Button/index';
import ListIcon from '@material-ui/icons/List';
import Chip from '../Chip';

const useStyles = makeStyles((theme) => ({
    tableRowRoot: {
        width: '100%',
        // backgroundColor:"black"
        textAlign: "center"
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        // minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    selected: {
        backgroundColor: "#ececec !important",
    },
    colorSecondary: {
        color: "#4E4F50",
        "&.Mui-checked": {
            color: "#4E4F50"
        }
    },
    alert: {
        backgroundColor: "#89b3b0",
        color: "#4E4F50",
        "&.MuiAlert-icon": {
            color: "red"
        }
    },
    loading: {
        color: "#4E4F50"
    },
    tableCellRoot: {
        textAlign: "center"
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, head = [] } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                        classes={{ colorSecondary: classes.colorSecondary }}
                    />
                </TableCell>
                {head.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        // align={headCell.numeric ? 'right' : 'left'}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    // highlight:
    //     theme.palette.type === 'light'
    //         ? {
    //             color: theme.palette.secondary.main,
    //             backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    //         }
    //         : {
    //             color: theme.palette.text.primary,
    //             backgroundColor: theme.palette.secondary.dark,
    //         },
    highlight: {
        // backgroundColor: "#89b3b0",
        backgroundColor: "#4E4F50",
        color: "white"
    },
    title: {
        flex: '1 1 100%',
    },
    icons: {
        color: "white",
        "&:hover": {
            // backgroundColor:"red"
        }
    }
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, editButton = true, deleteButton = true, handleEdit, handleDelete, selected, toolbarOptions = [] } = props;
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                null
            )}

            {numSelected > 0 && deleteButton && (
                <Tooltip title="Delete">
                    <IconButton classes={{ root: classes.icons }} onClick={() => handleDelete(selected.map((i, k) => (i.id)))} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
            {numSelected == 1 && editButton && (
                <Tooltip title="Edit">
                    <IconButton classes={{ root: classes.icons }} onClick={() => handleEdit(selected[0])} aria-label="edit">
                        <ListIcon />
                    </IconButton>
                </Tooltip>
            )
            }
            {toolbarOptions.map((item,index) => {
                return (
                    numSelected==1 == !item.multiple ? 
                    <Tooltip title={item.tooltip}>
                        <IconButton classes={{ root: classes.icons }} onClick={() => {item.onClick(selected)}}>
                            {item.icon}
                        </IconButton>
                    </Tooltip>
                    : null
                )
            })}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};



export default function EnhancedTable({ items = [], head = [], handleEdit, handleDelete, name = 'item', loading, deleteButton, editButton, toolbarOptions }) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(head[1].id);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = items.map((n) => n);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {
                    !!selected.length &&
                    <EnhancedTableToolbar toolbarOptions={toolbarOptions} deleteButton={deleteButton} editButton={editButton} handleEdit={handleEdit} handleDelete={handleDelete} selected={selected} numSelected={selected.length} handleDelete={handleDelete} />

                }
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            head={head}
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={items.length}
                        />
                        <TableBody>
                            {items.length > 0 && !loading &&

                                stableSort(items, getComparator(order, orderBy))

                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                classes={{ selected: classes.selected, root: classes.tableRowRoot }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        onClick={(event) => handleClick(event, row)}
                                                        // inputProps={{{ 'aria-labelledby': labelId }}}
                                                        classes={{ colorSecondary: classes.colorSecondary, root: classes.tableCellRoot }}
                                                    />
                                                </TableCell>
                                                {
                                                    head.map((h, headIndex) => {

                                                        switch (head[headIndex].type) {
                                                            case 'date':
                                                                return (
                                                                    <TableCell key={headIndex} component="th" id={labelId} scope="row" align="center" padding="none">
                                                                        {row[head[headIndex].id]}
                                                                    </TableCell>)
                                                            case 'active':
                                                                return (
                                                                    <TableCell key={headIndex} component="th" id={labelId} scope="row" align="center" padding="none">
                                                                        {row[head[headIndex].id] == '1' ? <Chip type="success" label="Active" /> : <Chip type="danger" label="Idle" />}
                                                                    </TableCell>)
                                                            case 'box':
                                                                return (
                                                                    <TableCell key={headIndex} component="th" id={labelId} scope="row" align="center" padding="none">
                                                                        {row[head[headIndex].id] == '1' ? <Chip type="success" label="Active" /> : <Chip type="danger" label="Idle" />}
                                                                    </TableCell>)

                                                            default:
                                                                return (
                                                                    <TableCell key={headIndex} component="th" id={labelId} scope="row" align="center" padding="none">
                                                                        {row[head[headIndex].id]}
                                                                    </TableCell>)
                                                        }

                                                        // return (
                                                        //     <>
                                                        //         <TableCell key={headIndex} component="th" id={labelId} scope="row" align="center" padding="none">
                                                        //             {
                                                        //                 (head[headIndex].type == 'date' ? row[head[headIndex].id] :
                                                        //                     head[headIndex].type == 'active' ? row[head[headIndex].id] == '1' ? <Chip type="success" label="Active" /> : <Chip type="danger" label="Idle" /> :
                                                        //                         row[head[headIndex].id])
                                                        //             }
                                                        //         </TableCell>
                                                        //     </>
                                                        // )
                                                    })
                                                }
                                            </TableRow>
                                        );
                                    })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    {!items.length > 0 && !loading &&
                        <Alert classes={{ standardInfo: classes.alert }} severity="info">No {name} was found - use the filter button to search!</Alert>
                    }

                </TableContainer>
                {
                    loading &&
                    <div style={{ display: "flex", justifyContent: "center", height: "100px", alignItems: "center" }}>
                        <CircularProgress classes={{ colorPrimary: classes.loading }} />
                    </div>
                }
            </Paper>

            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            /> */}
        </div>
    );
}

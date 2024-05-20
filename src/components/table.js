import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Backdrop, CircularProgress  } from '@mui/material';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import DatePicker from "react-datepicker";
import './css/react-datepicker-module.css';
import './css/react-datepicker.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { visuallyHidden } from '@mui/utils';
import './../App.css';
import baseData from '../mock/mockData';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters, setVisibleColumns, setOrderBy, setOrder, setCurrentPage, setHeadCells, initialState, setPatients } from '../app/features/tableConfig/tableSlice';

const DetailModal = React.lazy(() => import('MicroFrontend/DetailModal'));

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
    const [selected, setSelected] = React.useState({});
    const [newFilters, setNewFilters] = React.useState({});
    const patients = useSelector((state) => state.table.patients);
    const headCells = useSelector((state) => state.table.headCells);
    const filters = useSelector((state) => state.table.filters);
    const visibleColumns = useSelector((state) => state.table.visibleColumns);
    const orderBy = useSelector((state) => state.table.orderBy);
    const order = useSelector((state) => state.table.order);
    const currentPage = useSelector((state) => state.table.currentPage);
    const rowsPerPage = useSelector((state) => state.table.rowsPerPage);

    React.useEffect(()=> {
        activateLoading();
        // API'den data çekiyor olsaydık bu kısımda sayfa ilk açıldığında çalıştırılır
    }, [])

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        dispatch(setOrder(isAsc ? 'desc' : 'asc'));
        dispatch(setOrderBy(property));
    };

    const handleClick = (event, row) => {
        setIsDetailModalOpen(true);
        setSelected(row);
    };

    const handleChangePage = (event, newPage) => {
        dispatch(setCurrentPage(newPage));
    };

    const emptyRows = currentPage > 0 ? Math.max(0, (1 + currentPage) * rowsPerPage - patients.length) : 0;

    const visibleRows = React.useMemo(
        () =>
        stableSort(patients, getComparator(order, orderBy)).slice(
            currentPage * rowsPerPage,
            currentPage * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, currentPage, rowsPerPage, patients],
    );

    const ageColor = (age) => {
        if (Number(age) < 35)
            return 'green';
        else if (55 > Number(age) && Number(age) > 35)
            return 'blue';
        else
            return 'red'
    };

    const isColumnVisible = (columnId) => {
        if (visibleColumns.includes(columnId))
            return true;
        else
            return false;
    };

    const hideColumn = (columnId) => {
        const exist = visibleColumns.some((item)=> item === columnId);
        if (exist) {
            const updatedVisibleColumns = visibleColumns.filter(item => item !== columnId);
            dispatch(setVisibleColumns(updatedVisibleColumns))
        }
    };

    const cleanObject = (obj) => {
        const cleanedObj = {};
        
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (value !== "" && value !== null && value !== undefined) {
                    cleanedObj[key] = value;
                }
            }
        }
        return cleanedObj;
    };

    const filterData = (data, filters) => {
        let betterFilters = cleanObject(filters);
        return data.filter(item => {
            return Object.keys(betterFilters).every(key => {
                if (typeof betterFilters[key] === "string" && item[key].toLowerCase() === betterFilters[key].toLowerCase())
                    return true;
                else if (item[key] === betterFilters[key])
                    return true;
                else
                    return false;
            });
        });
    };

    const applyFilterPatients = (patients, filters) => {
        activateLoading();
        const filteredPatients = filterData(patients, filters);
        dispatch(setFilters(filters));
        dispatch(setPatients(filteredPatients));
    };

    const activateLoading = () => {
        setLoading(true);
        setTimeout(()=> {setLoading(false)}, 1000)
    }

    const resetTable = () => {
        activateLoading();
        dispatch(setFilters(initialState.filters));
        setNewFilters(initialState.filters);
        dispatch(setVisibleColumns(initialState.visibleColumns));
        dispatch(setOrder(initialState.order));
        dispatch(setOrderBy(initialState.orderBy));
        dispatch(setCurrentPage(initialState.currentPage));
        dispatch(setHeadCells(initialState.headCells));
        dispatch(setPatients(initialState.patients));
    };

    const refreshTable = () => {
        activateLoading();
        dispatch(setPatients(baseData));
        dispatch(setFilters(newFilters));
        applyFilterPatients(baseData, newFilters);
    }

    const EnhancedTableHead = (props) => {
        const { order, orderBy, onRequestSort } = props;
        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };

        return (
            <TableHead>
                <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                    <span className='visibility-wrapper'>
                        {isColumnVisible(headCell.id) ? <VisibilityOffIcon onClick={()=> hideColumn(headCell.id)} fontSize='small' /> : null }
                    </span>
                    <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                        style={{fontWeight: 700}}
                    >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                        ) : null}
                    </TableSortLabel>
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
        );
    };

    EnhancedTableHead.propTypes = {
        onRequestSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
    };

    const FilterComponent = (props) => {
        const { filters, newFilters } = props;
    
        return (
            <Box className="form-wrapper">
                <TextField
                    sx={{ fontSize: "12px" }}
                    size="small"
                    value={newFilters.firstName} 
                    onChange={(e)=> setNewFilters({...newFilters, firstName: e.target.value})} 
                    id="firstName" label="İsim" variant="outlined"
                    style={{fontSize: "10px"}}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            applyFilterPatients(baseData, newFilters);
                        }
                    }}
                />
                <TextField
                    size="small"
                    value={newFilters.lastName} 
                    onChange={(e)=> setNewFilters({...newFilters, lastName: e.target.value})}  
                    id="lastName" label="Soyisim" variant="outlined"
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            applyFilterPatients(baseData, newFilters);
                        }
                    }} 
                />
                <TextField
                    sx={{width: "100px"}}
                    size="small"
                    type='Number'
                    value={newFilters.age} 
                    onChange={(e)=> setNewFilters({...newFilters, age: e.target.valueAsNumber})} 
                    id="age" label="Yaş" variant="outlined"
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            applyFilterPatients(baseData, newFilters);
                        }
                    }}
                />
                <FormControl sx={{ m: 1, marginTop: "0px", minWidth: 120 }} size="small">
                    <InputLabel id="age-select-label">Cinsiyet</InputLabel>
                    <Select
                        labelId="genderSelect"
                        id="gender"
                        value={newFilters.gender}
                        label="Cinsiyet"
                        onChange={(e)=> setNewFilters({...newFilters, gender: e.target.value})}
                        size="small"
                        style={{width: "100px"}}
                    >
                        <MenuItem value={"Erkek"}>Erkek</MenuItem>
                        <MenuItem value={"Kadın"}>Kadın</MenuItem>
                    </Select>
                </FormControl>
                <DatePicker 
                    onChange={(value)=> setNewFilters({...newFilters, admissionDate: value ? value.toISOString().split('T')[0] : ''})}
                    selected={newFilters.admissionDate ? new Date(newFilters.admissionDate) : ''}
                    placeholderText='Başvuru Tarihi'
                    dateFormat="YYYY-MM-dd"
                />
                <TextField
                    size="small"
                    value={newFilters.diagnosis} 
                    onChange={(e)=> setNewFilters({...newFilters, diagnosis: e.target.value})} 
                    id="diagnosis" label="Teşhis" variant="outlined"
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' || e.keyCode === 13) {
                            applyFilterPatients(baseData, newFilters);
                        }
                    }}
                />
                <Button 
                    sx={{ height: "40px" }}
                    variant="contained"
                    onClick={()=> applyFilterPatients(baseData, newFilters)}
                >
                    Filtre Uygula
                </Button>
            </Box>
        )
    }

    FilterComponent.propTypes = {
        filters: PropTypes.any,
        newFilters: PropTypes.any,
    };

    return (
        <Box sx={{ width: '100%' }}>
            <DetailModal
                data={selected}
                isModalOpen={isDetailModalOpen} 
                onClose={() => setIsDetailModalOpen(false)}
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Paper sx={{ width: '100%', mb: 2 }}>
                {FilterComponent({filters: filters, newFilters: newFilters})}
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={patients.length}
                        />
                        <TableBody>
                        {(loading ? [] : visibleRows).map((row, index) => {
                            return (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, row)}
                                tabIndex={-1}
                                key={row.id}
                                sx={{ cursor: 'pointer' }}
                            >
                                {visibleColumns.some((item)=> item === "firstName") && <TableCell align="left">{row.firstName}</TableCell>}
                                {visibleColumns.some((item)=> item === "lastName") && <TableCell align="left">{row.lastName}</TableCell>}
                                {visibleColumns.some((item)=> item === "age") && <TableCell style={{color: ageColor(row.age), fontWeight: 'bold'}} align="left">{row.age}</TableCell>}
                                {visibleColumns.some((item)=> item === "gender") && <TableCell align="left">{row.gender}</TableCell>}
                                {visibleColumns.some((item)=> item === "admissionDate") && <TableCell align="left">{row.admissionDate}</TableCell>}
                                {visibleColumns.some((item)=> item === "diagnosis") && <TableCell align="left">{row.diagnosis}</TableCell>}
                            </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                            style={{
                                height: 33 * emptyRows,
                            }}
                            >
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='table-action-wrapper'>
                    <Button
                        onClick={()=> refreshTable()}
                        size='small' variant="contained" color="success"
                    >
                        Yenile
                    </Button>
                    <Button 
                        onClick={()=> resetTable()}
                        size="small" variant="contained" color="primary"
                    >
                        Sıfırla
                    </Button>
                </div>
                <TablePagination
                    component="div"
                    count={patients.length}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}
import React, { useEffect, useState } from 'react';
// Import useLocation from react-router-dom
import { useLocation } from 'react-router-dom';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../logo.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from "@mui/material/TextField";
import Pagination from '@mui/material/Pagination';

export default function TestTable() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [filteredPatients, setFilteredPatients] = useState([]); // State to store filtered patients

  const [page, setPage] = useState(1); // State to track the current page
  const rowsPerPage = 2; // Number of rows to display per page

  // Fetch data from API using fetch method
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setFilteredPatients(data); // Set the filtered patients initially to all patients
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const { email } = location.state || {};

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase(); // Convert search term to lowercase for case insensitive search
    setSearchTerm(searchValue);

    // Filter the patients based on the search term
    const filteredList = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchValue)
    );
    setFilteredPatients(filteredList);
    setPage(1); 
  };

  // Determine the rows to display based on the current page
  const pageCount = Math.ceil(filteredPatients.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;         //page = 1, 0
  const endIndex = startIndex + rowsPerPage;         //0+2
  const searchedDataToRender = filteredPatients.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value); // Update the current page
  };

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ backgroundColor: '#0d1224' }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: '55px', cursor: 'pointer' }} />
          </Box>
          {email && (
            <Typography variant="body1" sx={{ marginRight: '20px', color: 'white', fontFamily: 'Montserrat', fontWeight: '200' }}>
              {email}
            </Typography>
          )}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>User Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br />
      <Box>
        <Typography sx={{ textAlign: 'center', fontSize: "1.6rem", fontWeight: "100", margin: '20px 0px 0px', fontFamily: 'Montserrat' }}>
          Patient's Record
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'left', marginBottom: '10px', marginLeft: '20px' }}>
          <TextField
            variant="outlined"
            placeholder="Search Patient by Name"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: '400px' }}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Patient ID</TableCell>
                <TableCell>Patient's Name</TableCell>
                <TableCell>Patient's Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchedDataToRender.map((patient) => (
                <TableRow key={patient.id}
                  sx={{
                    '&:hover': {
                      background: 'linear-gradient(90deg, rgba(8, 181, 172, 1) 0%, rgba(126, 217, 87, 1) 100%)',
                      cursor: 'pointer',
                    },
                  }}>
                  <TableCell>{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.username}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{`${patient.address.street}, ${patient.address.city}, ${patient.address.zipcode}`}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
          <Pagination
            count={pageCount} // Total number of pages
            page={page} // Current page number
            onChange={handlePageChange} // Function to handle page change
            showFirstButton
            showLastButton
            disabled={pageCount === 0} // Disable if there are no pages
          />
        </Box>
      </Box>
    </Box>
  );
}

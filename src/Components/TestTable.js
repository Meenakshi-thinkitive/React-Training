import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function TestTable() {
  const [patients, setPatients] = useState([]);

  // Fetch data from API using fetch method
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box>
      <Typography sx={{ textAlign: 'center', fontSize: "1.6rem", fontWeight: "100", margin: '20px 0px 0px', fontFamily: 'Montserrat' }}>
        Patient's Record
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* Define table headers */}
              <TableCell>Patient ID</TableCell>
              <TableCell>Patient's Name</TableCell>
              <TableCell>Patient's Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render table rows dynamically based on fetched data */}
            {patients.map((patient) => (
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
    </Box>
  );
}

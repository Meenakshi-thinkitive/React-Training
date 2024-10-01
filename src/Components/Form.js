// src/Form.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function Form() {
  // State to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // For now, just log the values (you can add further logic here)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Login Form
      </Typography>
      <form onSubmit={handleSubmit}>
      <Typography fontStyle="italic" fontSize="0.75rem" fontWeight="200" style={{ opacity: 0.5 }}>
        Email
      </Typography>
        <TextField
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Typography fontStyle="italic" fontSize="0.75rem" fontWeight="200" style={{ opacity: 0.5 }}>
        Password
      </Typography>
        <TextField
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Form;

import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ 
  label, 
  value, 
  onChange, 
  error, 
  helperText, 
  ...props 
}) => {
  return (
    <TextField
      
      variant="standard"
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: "gray", // Normal color
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "blue", // Hover color
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "green", // Focused color
        },
        "& input": {
          color: "purple", // Text color
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;

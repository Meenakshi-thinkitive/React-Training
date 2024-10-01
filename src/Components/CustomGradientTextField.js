import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a styled component for the gradient TextField
const GradientTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInput-underline:before': {
    borderBottomColor: 'transparent', // Set normal color to transparent
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient color
    backgroundSize: '100% 2px', // Size of the gradient
    backgroundRepeat: 'no-repeat', // No repeat
    backgroundPosition: 'bottom', // Position at the bottom
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'transparent', // Hover state
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient on hover
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent', // Focused state
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient on focus
  },
  '& input': {
    color: 'purple', // Text color
  },
}));

const CustomGradientTextField = ({ 
  label, 
  value, 
  onChange, 
  error, 
  helperText, 
  ...props 
}) => {
  return (
    <GradientTextField
      variant="standard"
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};

export default CustomGradientTextField;

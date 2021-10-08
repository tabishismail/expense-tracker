import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function MyInputs({fullWidth,name,onBlur,onChange,value,error,label,type,placeholder}) {
  return (
      
    <TextField id={error ? "outlined-error-helper-text": "outlined-basic"}
    name={name}
    error={error}
    onBlur={onBlur}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    fullWidth={fullWidth}
    type={type}
    label={label}
    helperText={error}
    variant="outlined" />
  )
}
import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({variant,fullWidth,label,onClick}) {
  return (
      <Button onClick={onClick} fullWidth={fullWidth} variant={variant}>{label}</Button>
  );
}
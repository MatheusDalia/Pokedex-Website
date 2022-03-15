import { Snackbar, Alert } from '@mui/material/';
import { SetStateAction } from 'react';

type ToastProps = {
  children: React.ReactNode;
  type: 'success' | 'error' | 'info' | 'warning';
  setOpen: React.Dispatch<SetStateAction<string>>;
};

export const Toast = ({ children, setOpen, type }: ToastProps) => {
  const message = children;
  return (
    <Snackbar
      open={!!message}
      autoHideDuration={6000}
      onClose={() => setOpen('')}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={() => setOpen('')}
        severity={type}
        sx={{ fontSize: '14px', alignItems: 'center' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

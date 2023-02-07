import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../header/Header';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
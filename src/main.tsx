import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { RedAppleTheme } from './_theme/theme'
import { Router } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={RedAppleTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

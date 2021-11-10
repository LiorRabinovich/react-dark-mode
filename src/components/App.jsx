import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { ThemeSwitch } from './ThemeSwitch'

function App() {
  const { darkMode } = useTheme();
  const theme = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={theme}>
      <div>theme = {theme}</div>
      <ThemeSwitch />
    </div>
  )
}

export default App

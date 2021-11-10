import React from 'react';
import { useTheme } from '../context/ThemeContext'

export function ThemeSwitch() {
    const { toggleDarkMode } = useTheme()

    return (
        <button onClick={() => toggleDarkMode()}>Toogle Dark Mode</button>
    )
}

import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext"; 

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
        <header style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '1rem' }}></header>
        <h1>My App Header</h1>
        <button onClick={toggleTheme}>Toggle Theme </button>
        </div>
    )
}
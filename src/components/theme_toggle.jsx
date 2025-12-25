
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); {/*false because the true is the light theme*/}

    return <button> {isDarkMode ? <Sun /> : <Moon />} </button>
}



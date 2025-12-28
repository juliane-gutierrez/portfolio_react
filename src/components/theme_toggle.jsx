import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); /*false because the true is the light theme*/
    /* the function below is to: if its dark */
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}>
            {''}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" /> 
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )} 
        </button>
    );
};



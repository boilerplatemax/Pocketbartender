import React,{useContext, useState} from "react"

const ThemeContext = React.createContext()

export function themeProvider({children}){
    const [dartkTheme,setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)
    }
    return(
        <ThemeContext.Provider value={dartkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
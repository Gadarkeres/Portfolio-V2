import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if(theme === 'dark'){
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  },[theme])

  const handleTheme = () => {
    if(theme === 'dark'){
      setTheme('light')
    }
    else{
      setTheme('dark')
    }
  }
  return handleTheme;
}
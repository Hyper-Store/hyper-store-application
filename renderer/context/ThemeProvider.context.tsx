import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import React, { createContext, useState } from 'react';
import dark from '../styles/themes/dark'

type ThemeOptions = "dark"

interface ThemeProviderContextProps {
    theme: string,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProviderStyled theme={dark}>
                {children}
            </ThemeProviderStyled>
        </>
    )
}
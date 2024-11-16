'use client'
import React, { createContext, ReactNode, useState } from 'react';

interface CartContextType {
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ThemeContext = createContext<CartContextType | any>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<any[]>([]);
    return (
        <ThemeContext.Provider value={{ cart, setCart }}>
            
            {children}
        </ThemeContext.Provider>
    );
};

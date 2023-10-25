"use client";

import { FC, createContext, useState } from "react";

export const GlobalContext = createContext<any>(null)

const GlobalProvider: FC<any> = ({ children }: any) => {
    const [isInputModelOpen, setIsInputModelOpen] = useState<boolean>(false);
    return (
        <GlobalContext.Provider value={{ isInputModelOpen, setIsInputModelOpen }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
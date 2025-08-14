"use client"
import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <Context.Provider value={{
            isModal,
            setIsModal
        }}>
            {children}
        </Context.Provider>
    )
}

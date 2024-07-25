import React, { createContext, useContext, useState } from "react"


const LoadingContext = createContext()

export const useLoading = () => {
    return useContext(LoadingContext)
}

export const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(false)

    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)

    const value = {
        loading,
        startLoading,
        stopLoading
    }

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}
'use client'
import { SessionProvider } from "next-auth/react"
const SessionProviderPage = ({children}:any) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionProviderPage
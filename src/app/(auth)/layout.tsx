import React from 'react'
import '../globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Ecomart",
    description: "Generated by Ammar shaikh",
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body suppressHydrationWarning={true}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}

export default AuthLayout
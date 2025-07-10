import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Farouk Alsajee - Software Engineer & Full-Stack Developer',
    description: 'Full-stack software engineer with 3+ years of experience building scalable web applications and enterprise solutions.',
    keywords: 'Software Engineer, Full-Stack Developer, React, TypeScript, Node.js, Vancouver',
    authors: [{ name: 'Farouk Alsajee' }],
    openGraph: {
        title: 'Farouk Alsajee - Software Engineer',
        description: 'Full-stack software engineer with expertise in React, TypeScript, and modern web technologies.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen bg-gray-50">
                    {children}
                </div>
            </body>
        </html>
    )
} 
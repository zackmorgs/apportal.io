"use client";

import {useEffect, useState, ReactNode} from 'react';

interface MainProps {
    // title: string;
    children: ReactNode;
    className?: string; // Explicitly include className
    // Include any other props you expect
    [key: string]: any; // This line is for any additional props
}


export default function Main({ title, children, className, ...rest }: MainProps) {
    const [loading, setLoading] = useState(true);
    const [loadPercentage, setLoadPercentage] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setLoadPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 10;
                }
                return prev + 1; // increment loading percentage
            });
        }, 10); // Update every 100ms

        return () => clearInterval(interval);
    }, []);


    if (loading) {
        return (
            <main className="loading">
                <p>{loadPercentage}%</p>
            </main>
        )
    } else {
        return (
            <main>
                {children}
            </main>
        )
    }

}
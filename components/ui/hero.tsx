import React, { ReactNode, HTMLAttributes } from 'react';

interface HeroProps {
    // title: string;
    children: ReactNode;
    className?: string; // Explicitly include className
    // Include any other props you expect
    [key: string]: any; // This line is for any additional props
}

export default function Hero({ title, children, className, ...rest }: HeroProps) {
    return (
        <section id="hero" className={className}>
            {children}
        </section>
    )
}

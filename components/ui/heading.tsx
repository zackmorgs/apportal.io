import React, {ReactNode} from 'react';
import { DM_Sans } from 'next/font/google'

import "@/styles/headings.scss";

const dmSans = DM_Sans({ 
    subsets: ['latin'],
    weight: [
      '300',
    ]
  })

interface HeadingProps {
    children: ReactNode;
}

export function HeadingXL({ children }: HeadingProps) {
    return (
        <h1 className={`${dmSans.className} lowercase text-6xl leading-tighter heading-1`}>{children}</h1>
    )
}

export function HeadingLg({ children }: HeadingProps) {
    return (
        <h2 className={`uppercase text-3xl mt-2 mb-4 leading-tighter`}>{children}</h2>
    )
}

export function HeadingMd({ children }: HeadingProps) {
    return (
        <h3 className="font-bold text-2xl">{children}</h3>
    )
}

export function HeadingSm({ children }: HeadingProps) {
    return (
        <h4 className="text-xl font-bold">{children}</h4>
    )
}

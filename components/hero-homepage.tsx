"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

import Hero from '@/components/ui/hero'
import { HeadingXL } from '@/components/ui/heading'
import Link from 'next/link';
import Image from 'next/image';

type FadeProp = { fade: 'fade-in' | 'fade-out' }

export default function HeroHomepage(): React.JSX.Element {
    const [currentWord, setCurrentWord] = useState("website's");
    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })

    const words = [ "website's", "desktop app's", " mobile app's"];

    useEffect(() => {
        const changeWordInterval = setInterval(() => {
            setCurrentWord(prevWord => {
                const currentIndex = words.indexOf(prevWord);
                const nextIndex = (currentIndex + 1) % words.length;

                return words[nextIndex];
            });
        }, 4000); // Change word every 2000 milliseconds (2 seconds)

        return () => clearInterval(changeWordInterval);
    }, []);



    return (
        <Hero className="hero-homepage">
            <div className="hero-bg">
                <Image id="portal-bg" src="/svg/portal.svg" alt="apportal.io Portal" width={375} height={375} />
            </div>
            <div className="hero-text">
                <HeadingXL>
                    Your <TextTransition springConfig={presets.wobbly} inline={true}><span id="hero-keyword">{currentWord}</span></TextTransition> Digital Gateway
                </HeadingXL>
            </div>
            <div id="cta">
                <Link id="btn-quote" className="btn" href="/contact" aria-label="Get a Quote">
                    Get a Quote
                </Link>
            </div>
        </Hero>
    )
}
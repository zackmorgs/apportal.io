'use client';
import "@/styles/header.scss";
import { useState, useEffect } from 'react'

import Link from "next/link";

const menuItems = [
    {
        name: "Services",
        url: "/services/"
    },
    {
        name: "Showcase",
        url: "/showcase/"
    },
    {
        name: "Contact",
        url: "/contact/"
    }
]

export default function Header() {
    const [isOpen, setNavOpen] = useState<boolean>(false)

    useEffect(() => {

    })

    const toggleNav = () => {
        setNavOpen(!isOpen);
    }

    return (
        <header id="nav" className={isOpen ? "open" : ""}>
            <div id="nav_container">
                <div id="navbar">
                    <Link id="logo" href="/" aria-label="Home">
                        apportal.io
                    </Link>
                    <button id="hamburger" onClick={toggleNav} aria-label="Toggle Navigation" type="button">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
                <ul id="nav_items">
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.url} aria-label={item.name} className="nav-link">
                                    {item.name} 
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}
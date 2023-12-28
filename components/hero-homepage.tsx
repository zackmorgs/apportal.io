import Hero from '@/components/ui/hero'
import { HeadingXL } from '@/components/ui/heading'
import Link from 'next/link';


export default function HeroHomepage() {
    return (
        <Hero className="hero-homepage">
            <div className="hero-bg">
            </div>
            <div className="hero-text">
                <HeadingXL>
                    Experience New Digital Horizons
                </HeadingXL>

            </div>
            <Link id="btn-quote" className="btn" href="/contact">
                Get a Quote
            </Link>
        </Hero>
    )
}
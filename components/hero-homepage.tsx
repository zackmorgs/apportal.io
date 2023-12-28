import Hero from '@/components/ui/hero'
import { HeadingXL } from '@/components/ui/heading'
import Link from 'next/link';
import Image from 'next/image';


export default function HeroHomepage() {
    return (
        <Hero className="hero-homepage">
            <div className="hero-bg">
                <Image src="/svg/portal.svg" alt="apportal.io Portal" width={375} height={375}/>
            </div>
            <div className="hero-text">
                <HeadingXL>
                    Experience New Digital Horizons
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
import { HeadingLg } from '@/components/ui/heading';
import Link from 'next/link';

const services = [
    {
        name: "Web Development",
        url: ""
    },
    {
        name: "AI Integrations and Solutions",
        url: ""
    },
    {
        name: "E-Commerce Solutions",
        url: ""
    },
    {
        name: "Branding & Creative Services",
        url: ""
    },
    {
        name: "Software Development & Prototyping",
        url: ""
    }
]

export default function ServicesHomepage() {
    return (
        <section id="services_homepage" className="mt-8">
            <div className="max-w-6xl mx-auto py-4 px-4">
                <HeadingLg>
                    services
                </HeadingLg>
                <ul id="services-list">
                    {services.map((service)=>{
                        return (
                            <li>
                                <Link href={service.url} aria-label={service.name}>
                                    {service.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </section>
    )
}
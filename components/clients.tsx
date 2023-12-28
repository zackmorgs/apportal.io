import { HeadingLg } from '@/components/ui/heading';
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";

export default function Clients() {
    return (
        <section id="previous_clients" className="w-full">
            <div className="max-w-6xl mx-auto py-4 px-4">
                <HeadingLg>
                <div className="flex flex-row justify-between align-center">
                        <span>clients</span> <AiOutlineDown />
                    </div>
                </HeadingLg>
            </div>

        </section>
    )
}
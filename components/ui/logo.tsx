import Image from "next/image"

export default function Logo() {
    return (
        <div className="logo">
            <Image src="/svg/portal.svg" height={20} width={20} alt="Portal" className="mr-3" />
            <span>
            <span className="sld">apportal</span><span className="dot">.</span><span className="tld">io</span>
            </span>
        </div>
    )
}
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

interface NavProps {
    className: string
}

const links = [
    { name: 'Home', path: '/'},
    { name: 'Our Bikes', path: '/our-bikes'},
]

const Nav: FC<NavProps> = ({ className }) => {
    const pathname = usePathname()

    return (
        <nav className={className}>
            {
                links.map((link, idx) => (
                    <Link
                        href={link.path}
                        key={idx}
                        className={`${link.path === pathname && 'text-accent'}`}
                    >{link.name}</Link>
                ))
            }
        </nav>
    )
}

export default Nav

"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'


function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname();
    const params = useParams();

    const hrefString = 'admin'

    const routes = [
        {
            href: `/${hrefString}`,
            label: 'Overview',
            active: pathname === `/${hrefString}`,
        },
        {
            href: `/${hrefString}/about-me`,
            label: 'AboutMe',
            active: pathname === `/${hrefString}/about-me`,
        },
        {
            href: `/${hrefString}/projects`,
            label: 'Projects',
            active: pathname === `/${hrefString}/projects`,
        },
        {
            href: `/${hrefString}/badges`,
            label: 'Badges',
            active: pathname === `/${hrefString}/badges`,
        },
        {
            href: `/${hrefString}/skills`,
            label: 'Skills',
            active: pathname === `/${hrefString}/skills`,
        },
        {
            href: `/${hrefString}/certificates`,
            label: 'Certificates',
            active: pathname === `/${hrefString}/certificates`,
        },
        {
            href: `/${hrefString}/public-profiles`,
            label: 'PublicProfiles',
            active: pathname === `/${hrefString}/public-profiles`,
        },
    ]

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'bg-gray-700 rounded-full p-2 text-sm font-medium transition-colors hover:text-primary',
                        route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav

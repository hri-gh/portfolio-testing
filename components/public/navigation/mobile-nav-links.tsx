'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {links} from './nav-links-data'

import { SheetClose } from '@/components/ui/sheet';

export default function MobNavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <SheetClose asChild key={link.id}>
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                " text-black flex h-[48px] grow gap-5 mb-2 rounded-md bg-gradient-to-r border-y-2 border-indigo-500 from-yellow-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ",

                                {
                                    'bg-sky-100 text-blue-600': pathname === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            {/*removed from below (p) element className => hidden md:block */}
                            <p className="">{link.name}</p>
                        </Link>
                    </SheetClose>
                );
            })}
        </>
    );
}



import { TiThMenu, } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";


import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import MobNavLinks from './mobile-nav-links';


export function MobileSideNav() {
    return (
        <Sheet>
            {/* remove mt-4 mx-3 from below <SheetTrigger component> */}
            <SheetTrigger asChild className="lg:hidden md:hidden mt-4 mx-3">
                <Button variant="outline" className=''><TiThMenu className="w-6" /></Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-transparent border-none shadow-current">
                <div className=" mt-5">
                    <MobNavLinks />
                </div>

                <div className="mt-10 h-72 w-full grow rounded-md bg-gray-50 text-black md:block">
                    <header className='text-center'>Contact</header>

                    <div className='bg-gray-500 rounded-sm p-2 m-1'>Email...</div>
                    <div className='bg-gray-500 rounded-sm p-2 m-1'>Message...</div>
                    <Button variant="secondary" className='rounded-full m-1'>Send Message</Button>
                </div>
                <SheetFooter className="icon flex items-center">
                    <SheetClose asChild>
                        <Button className="absolute bottom-0 mb-2" variant="destructive" type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

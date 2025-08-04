
import useAuthStore from '@/store/auth-store'
import { useEffect } from 'react'
import MainNav from "@/components/admin/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserButton } from "../user-button"
import { UserButtonMenu } from "./user-button-menu"

import Cookies from 'js-cookie';

function Navbar() {
    // const login = useAuthStore((state) => state.login)

    // useEffect(() => {
    //   const token = Cookies.get('token');
    // if(token){
    //     login()
    // }
    // else{
    //     console.log("UNAUTHORIZED :: SIGN IN WITH YOUR CREDENTIALS")
    // }
    // }, [login])



    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <UserButtonMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar

import { auth } from "@/auth"
import SignIn from "./sign-in"
import { SignOut } from "./signout-button"
import UserAvatar from "./user-avatar"

export default async function Navigation() {
    const session = await auth()

    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white">
            {session?.user ? (
                <div className="flex items-center space-x-4">
                    <UserAvatar />
                    <SignOut />
                </div>
            ) : (
                <SignIn />
            )}
        </nav>
    )
}

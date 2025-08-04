import { auth } from "@/auth";
import Image from "next/image"
import { Button } from "../ui/button";

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    const imageUrl = session.user.image ?? '/default-avatar.png'; // default image URL

    return (
        <div>

            <Image
                width={60}
                height={60}
                src={imageUrl}
                alt={session.user.name || 'User Avatar'}
                className="w-10 h-10 rounded-full"
            />
            {/* {session.user.name} */}
        </div>
    )
}

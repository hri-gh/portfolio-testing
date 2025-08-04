
import { signIn } from "@/auth"


export default function SignIn() {
    return (
        <>
            <div>
                <form
                    action={async () => {
                        "use server"
                        await signIn("github",{redirectTo:"/admin"})
                    }}
                >
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Signin with GitHub</button>
                </form>

                <form
                    action={async () => {
                        "use server"
                        await signIn("google",{redirectTo:"/admin"})
                    }}
                >
                    <button type="submit">Sign in with Google</button>
                </form>
            </div>
        </>
    )
}

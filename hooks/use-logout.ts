"use client"
import useAuthStore from '@/store/auth-store'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";

export const useLogout = () => {

    const router = useRouter()
    const logout = useAuthStore((state) => state.logout)

    const handleLogout = async () => {
        // if (window.confirm('Are you sure?')) {
            try {
                const res = await axios.get("/api/user/logout")
                console.log(res)
                logout()
                toast.success("Logout successful")
                router.push('admin/login')
            } catch (error: any) {
                toast.error(error.message)
            }

        // }
    }
    return {
        handleLogout
    }

}

"use client"
import React from 'react'

import { useState } from 'react'
import { z } from "zod"
import { useForm, } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

import { LoginSchema } from '@/schemas'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { TriangleAlert } from 'lucide-react'

import useAuthStore from '@/store/auth-store'


const LoginForm = () => {
    const router = useRouter();
    const login = useAuthStore((state) => state.login)
    const [error, setError] = useState("")

    // 1. Define your form.
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { formState: { isSubmitting, errors } } = form

    // 2. Define onSubmit handle.
    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await axios.post("/api/user/login", values);
            const data = response.data
            toast.success("Login success")
            login(); // Update isLoggedIn state to true
            router.push("/admin")
        } catch (err: any) {
            // toast.error("Something went wrong");
            setError('Something went wrong')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-80 border-2 p-4 rounded-md bg-gray-800">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="john.doe@example.com"
                                    type="email"
                                // className='bg-gray-600'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="*****"
                                    type='password'
                                // className='bg-gray-600'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    {error && (
                        <span className='bg-red-400 p-1 rounded-md flex justify-center text-red-700'>
                            <TriangleAlert className='p-1' />
                            {error}
                        </span>
                    )}
                    {/* {errors.email && <span>{errors.email.message}</span>}
                    {errors.password && <span>{errors.password.message}</span>} */}
                </div>
                <Button className='w-full' disabled={isSubmitting} type="submit">{isSubmitting ? "Logining..." : "Login"}</Button>
            </form>
        </Form>
    )
}

export default LoginForm

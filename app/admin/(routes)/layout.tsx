import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/admin/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio Admin Dashboard",
    description: "Portfolio Admin Dashboard",
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode,

}) {


    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

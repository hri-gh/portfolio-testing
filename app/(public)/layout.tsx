import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SideNav from "@/components/public/navigation/side-nav";
import { ThemeToggle } from '@/components/theme-toggle';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Project",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    < >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className=" w-full flex-none md:w-64">
            <SideNav />
          </div>
          {/* md:p-12 changed to md:p-5 */}
          <div className="flex-grow p-6 md:overflow-y-auto md:py-5 md:px-12 ">{children}</div>
        </div>
    </>
  );
}

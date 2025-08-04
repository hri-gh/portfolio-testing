
// "use client"
import Link from 'next/link';
import NavLinks from './nav-links';

import ProfileCard from './profile-card';

import { ThemeToggle } from '@/components/theme-toggle';
import { MobileSideNav } from './mobile-side-nav';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '../contacts/contact-info';
import { fetchABoutMe } from '@/lib/services/fetch-aboutme';

export default async function SideNav() {
  const data = await fetchABoutMe()
  const mobile = data[0].mobileNumber
  const email = data[0].primaryGmail


  const blue500 = "bg-blue-400"

  return (
    <>
      <MobileSideNav />
      <div className="lg:hidden md:hidden mt-4 mx-3 float-right">
        <ThemeToggle />
      </div>

      {/* <div className={`${blue500}`}>Hello</div> */}
      <div className="flex h-full flex-col px-3 py-4 md:px-2 ">

        <div
          className="mb-2 p-2  flex h-auto items-center justify-center rounded-md bg-yellow-500 " // removed md:h-40

        >
          <div className="w-32 text-white md:w-40">
            <ProfileCard data={data}/>
          </div>
        </div>

        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-100 text-black md:block">
            {/* <header className='text-center'>Contact</header> */}
            <ContactInfo mobile={mobile} email={email}/>
          </div>

          <div className='cursor-pointer hidden md:flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <ThemeToggle/>
            <div className="hidden md:block text-black">Toggle Theme</div>
          </div>

        </div>
      </div>
    </>
  );
}

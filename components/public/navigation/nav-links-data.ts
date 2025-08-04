import {
    HiUserGroup,
    HiHome,
    HiDocumentDuplicate

} from 'react-icons/hi';

import { PiCertificateFill } from 'react-icons/pi';
import { CgWebsite } from "react-icons/cg";
import { BiSolidUserBadge } from "react-icons/bi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";

export const links = [
    { id: 0, name: 'Home', href: '/', icon: HiHome, },
    { id: 1, name: 'Projects', href: '/projects', icon: CgWebsite, },
    { id: 2, name: 'Skills & Certificates', href: '/skills&certificates', icon: PiCertificateFill },
    { id: 3, name: 'Public Profiles & Badges', href: '/public-profiles&badges', icon: FaRegAddressCard },
    // { name: 'Contact', href: 'contact', icon: FaRegAddressCard },
];

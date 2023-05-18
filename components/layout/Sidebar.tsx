import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import React from 'react'; // Add this line if not already imported

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton'


const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/'
       // Wrap the icon component in JSX tags
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      // Wrap the icon component in JSX tags
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: '/users/123',
       // Wrap the icon component in JSX tags
    }
  ];
      // col-span is the grid h-full height 100% pr-4 adds padding the right side, 
      //md:pr-6 applies paddding when screen width reaches medium break point
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'> {/* Corrected the class name */}
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
           <SidebarItem
           key={item.href}
           href={item.href} 
           icon={item.icon} 
           label={item.label}
         />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout"/>
          <SidebarTweetButton />
        </div> 
      </div>
    </div>
  );
};

export default Sidebar;




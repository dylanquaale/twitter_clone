import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import React from 'react'; // Add this line if not already imported

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: <BsHouseFill /> // Wrap the icon component in JSX tags
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: <BsBellFill /> // Wrap the icon component in JSX tags
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: <FaUser /> // Wrap the icon component in JSX tags
    }
  ];

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'> {/* Corrected the class name */}
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

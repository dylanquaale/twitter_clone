import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
// import { BiLogOut } from 'react-icons/bi'
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
          {/* <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout"/> */}
        </div> 
      </div>
    </div>
  );
};

export default Sidebar;

// import { BsHouseFill, BsBellFill } from 'react-icons/bs';
// import { FaUser } from 'react-icons/fa';
// import { BiLogOut } from 'react-icons/bi';
// import React from 'react';

// import SidebarItem from './SidebarItem';
// import SidebarLogo from './SidebarLogo';

// const Sidebar = () => {
//   const items = [
//     {
//       label: 'Home',
//       href: '/',
//       icon: <BsHouseFill /> // Wrap the icon component in JSX tags
//     },
//     {
//       label: 'Notifications',
//       href: '/notifications',
//       icon: <BsBellFill /> // Wrap the icon component in JSX tags
//     },
//     {
//       label: 'Profile',
//       href: '/users/123',
//       icon: <FaUser /> // Wrap the icon component in JSX tags
//     }
//   ];

//   return (
//     <div className="col-span-1 h-full pr-4 md:pr-6">
//       <div className="flex flex-col items-end space-y-2 lg:w-[230px]"> {/* Corrected the class name */}
//         <SidebarLogo />
//         {items.map((item) => (
//           <SidebarItem
//             key={item.href}
//             href={item.href}
//             icon={item.icon}
//             label={item.label}
//           />
//         ))}
//         <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


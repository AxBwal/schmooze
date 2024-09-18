import React from 'react';

function Navbar() {
    return (
        <div className='flex justify-between px-16 py-5'>
            <div className='flex items-center flex-shrink-0'>
                <span className="text-xl font-bold">Schmooze</span>
            </div>
            <div className='flex gap-5'>
                <NavItem text="What is Schmooze" />
                <NavItem text="FAQ's" />
                <NavItem text="User Love" />
                <NavItem text="Login" />
                <NavItem text="Signup" />
                <div className='bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Download Now
                </div>
            </div>
        </div>
    );
}

// Define the props type for NavItem
interface NavItemProps {
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return (
        <a
            href="#"
            className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
            {text}
        </a>
    );
}

export default Navbar;
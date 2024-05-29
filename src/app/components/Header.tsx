
"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className='flex justify-between'>
        <h3 className='text-white-600 text-xl'>Tintin</h3>
        <ul className='flex text-purple-600 space-x-4 items-center'>
           <li>Home</li>
          <li>Shop now</li>
          <li>My Profile</li>
          <div className="relative md:flex items-center space-x-1">
          <form action="#" method="GET" className="flex items-center">
            <input type="text" name="search" placeholder="Search Products" className="px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Search
            </button>
          </form>
        </div>

        </ul>
      </nav>
    </header>
  );
};

export default Header;

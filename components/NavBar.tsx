import { FunctionComponent } from 'react';
import Image from 'next/image';
import NavButton from './NavButton';

const NavBar: FunctionComponent = () => {
  return (
    <nav className="bg-gray-900 flex items-center justify-end px-10 py-4 shadow text-xl">
      <div className="flex items-center">
        <NavButton href="/" label="Home" />
        <NavButton href="/blog" label="Blog" />
        <NavButton href="/portfolio" label="Portfolio" />
      </div>
    </nav>
  );
};

export default NavBar;

import { FunctionComponent } from 'react';
import Image from 'next/image';
import NavButton from './NavButton';

const NavBar: FunctionComponent = () => {
  return (
    <nav className="bg-white flex items-center justify-between px-10 py-4 shadow text-xl">
      <div>Matt Joll</div>
      <div className="flex items-center">
        <NavButton href="/blog" label="Blog" />
        <a
          className="max-h-8 ml-8"
          href="https://github.com/mattjoll"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="GitHub"
            height={32}
            src="/images/GitHub-Mark-32px.png"
            width={32}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

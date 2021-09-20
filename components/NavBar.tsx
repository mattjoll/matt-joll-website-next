import { FunctionComponent } from 'react';

const NavBar: FunctionComponent = () => {
  return (
    <nav className="bg-white flex justify-between px-10 py-4 shadow text-xl">
      <div>Matt Joll</div>
      <a
        href="https://github.com/mattjoll"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Icon
      </a>
    </nav>
  );
};

export default NavBar;

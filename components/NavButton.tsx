import { FunctionComponent } from 'react';
import Link from 'next/link';

type NavButtonProps = {
  href: string;
  label: string;
};

const NavButton: FunctionComponent<NavButtonProps> = (props) => {
  return (
    <Link href={props.href}>
      <a className="cursor-pointer p-2 hover:text-green-400">{props.label}</a>
    </Link>
  );
};

export default NavButton;

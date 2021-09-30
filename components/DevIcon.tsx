import { FunctionComponent } from 'react';

type DevIconProps = {
  icon: string;
  link?: string;
  size?: string;
};

const DevIcon: FunctionComponent<DevIconProps> = (props) => {
  return (
    <a
      className="cursor-pointer mx-2"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`${props.icon} ${props.size || 'text-5xl'}`}></i>
    </a>
  );
};

export default DevIcon;

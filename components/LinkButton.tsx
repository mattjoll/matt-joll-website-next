import { FunctionComponent, PropsWithChildren } from 'react';

type LinkButtonProps = {
  url: string;
};

const LinkButton: FunctionComponent<PropsWithChildren<LinkButtonProps>> = ({
  children,
  url,
}) => {
  const classes = !url
    ? 'cursor-not-allowed text-gray-400'
    : 'cursor-pointer text-green-600';

  return (
    <a className={classes} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default LinkButton;

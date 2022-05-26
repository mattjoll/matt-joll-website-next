import { FunctionComponent, PropsWithChildren } from 'react';

const AboutSection: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <section className="my-20">{children}</section>;
};

export default AboutSection;

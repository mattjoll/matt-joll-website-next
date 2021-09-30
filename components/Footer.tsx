import { FunctionComponent } from 'react';
import DevIcon from './DevIcon';

const Footer: FunctionComponent = () => {
  return (
    <footer className="py-4 flex justify-center">
      <span>
        &#169; 2021 Matt Joll |{' '}
        <DevIcon
          icon="devicon-twitter-original"
          link="https://twitter.com/mattjoll"
          size="text-md"
        />
        <DevIcon
          icon="devicon-github-original"
          link="https://github.com/mattjoll"
          size="text-xl"
        />
      </span>
    </footer>
  );
};

export default Footer;

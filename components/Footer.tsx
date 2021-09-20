import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-max mx-auto py-4">
      <span>This site was made using: </span>
      <a
        className="px-3 hover:text-green-600"
        href="https://www.reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      <a
        className="px-3 hover:text-green-600"
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        TailwindCSS
      </a>
      <a
        className="px-3 hover:text-green-600"
        href="https://www.contentful.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contentful
      </a>
    </footer>
  );
};

export default Footer;

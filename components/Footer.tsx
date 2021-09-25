import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col items-center w-max mx-auto py-4">
      <span>This site was made using: </span>
      <div>
        <a
          className="px-3 hover:text-green-600"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
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
      </div>
    </footer>
  );
};

export default Footer;

import { FunctionComponent } from 'react';
import Image from 'next/image';
import DevIcon from './DevIcon';

const PortfolioItem: FunctionComponent = () => {
  return (
    <article className="flex flex-col justify-between md:flex-row">
      <div>
        <h2>Portfolio Item</h2>
        <p>This is a potfolio items. Yay!</p>
        <DevIcon
          icon="devicon-github-original"
          link="https://github.com/mattjoll"
        />
      </div>
      <Image
        alt="Portfolio Item"
        src="/images/Matt-head.jpg"
        height={300}
        width={300}
      />
    </article>
  );
};

export default PortfolioItem;

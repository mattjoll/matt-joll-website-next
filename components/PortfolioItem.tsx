import { FunctionComponent } from 'react';
import Image from 'next/image';
import DevIcon from './DevIcon';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';

type PortfolioItemProps = {
  portfolioItem: IPortfolioItem;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = ({
  portfolioItem,
}: PortfolioItemProps) => {
  const liveLinkClasses = !portfolioItem.liveUrl
    ? 'cursor-not-allowed text-gray-400'
    : 'cursor-pointer text-green-600';

  const sourceLinkClasses = !portfolioItem.repoUrl
    ? 'cursor-not-allowed text-gray-400'
    : 'cursor-pointer text-green-600';

  return (
    <article className="flex flex-col justify-between p-4 rounded-lg shadow-lg lg:flex-row">
      <div className="flex flex-col">
        <h2>{portfolioItem.title}</h2>
        <p>{portfolioItem.description}</p>
        <div className="flex mb-6 ml-auto gap-x-4">
          <a
            className={`${liveLinkClasses}`}
            href={portfolioItem.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View live app
          </a>
          <a
            className={`${sourceLinkClasses}`}
            href={portfolioItem.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
          </a>
        </div>
      </div>
      <figure className="flex-shrink-0 mt-2 self-center lg:ml-6 lg:mt-0">
        <Image
          alt="Portfolio Item"
          src={portfolioItem.imageUrl}
          height={200}
          width={360}
        />
      </figure>
    </article>
  );
};

export default PortfolioItem;

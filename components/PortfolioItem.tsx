import { FunctionComponent } from 'react';
import Image from 'next/image';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';
import LinkButton from './LinkButton';

type PortfolioItemProps = {
  portfolioItem: IPortfolioItem;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = ({
  portfolioItem,
}: PortfolioItemProps) => {
  return (
    <article className="flex flex-col justify-between p-4 rounded-lg shadow-lg lg:flex-row">
      <div className="flex flex-col">
        <h2>{portfolioItem.title}</h2>
        <p>{portfolioItem.description}</p>
        <div className="flex mb-6 ml-auto gap-x-4">
          <LinkButton url={portfolioItem.liveUrl}>View live example</LinkButton>
          <LinkButton url={portfolioItem.repoUrl}>View source</LinkButton>
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

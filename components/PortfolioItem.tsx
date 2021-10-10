import { FunctionComponent } from 'react';
import Image from 'next/image';
import DevIcon from './DevIcon';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';

type PortfolioItemProps = {
  portfolioItem: IPortfolioItem;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {
  return (
    <article className="flex flex-col justify-between p-4 rounded-lg shadow-lg lg:flex-row">
      <div className="flex flex-col">
        <h2>{props.portfolioItem.title}</h2>
        <p>{props.portfolioItem.description}</p>
        <a
          className="cursor-pointer self-end mt-2 text-green-600"
          href={props.portfolioItem.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </div>
      <figure className="flex-shrink-0 mt-2 self-center lg:ml-6 lg:mt-0">
        <Image
          alt="Portfolio Item"
          src={props.portfolioItem.imageUrl}
          height={200}
          width={360}
        />
      </figure>
    </article>
  );
};

export default PortfolioItem;

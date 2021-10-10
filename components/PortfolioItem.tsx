import { FunctionComponent } from 'react';
import Image from 'next/image';
import DevIcon from './DevIcon';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';

type PortfolioItemProps = {
  portfolioItem: IPortfolioItem;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {
  return (
    <article className="flex flex-col justify-between lg:flex-row">
      <div>
        <h2>{props.portfolioItem.title}</h2>
        <p>{props.portfolioItem.description}</p>
        <DevIcon
          icon="devicon-github-original"
          link={props.portfolioItem.repoUrl}
        />
      </div>
      <figure className="flex-shrink-0 mt-2 self-center lg:ml-6 lg:mt-0">
        <Image
          alt="Portfolio Item"
          src={props.portfolioItem.imageUrl}
          height={250}
          width={250}
        />
      </figure>
    </article>
  );
};

export default PortfolioItem;

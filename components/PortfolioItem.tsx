import { FunctionComponent } from 'react';
import Image from 'next/image';
import DevIcon from './DevIcon';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';

type PortfolioItemProps = {
  portfolioItem: IPortfolioItem;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {
  return (
    <article className="flex flex-col justify-between md:flex-row">
      <div>
        <h2>{props.portfolioItem.title}</h2>
        <p>{props.portfolioItem.description}</p>
        <DevIcon
          icon="devicon-github-original"
          link={props.portfolioItem.pageUrl}
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

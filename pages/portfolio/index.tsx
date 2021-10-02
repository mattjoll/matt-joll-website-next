import { NextPage } from 'next';
import PageHead from '../../components/PageHead';
import PortfolioItem from '../../components/PortfolioItem';

const Portfolio: NextPage = () => {
  return (
    <div className="mt-20">
      <PageHead title="Portfolio" pageUrl="/portfolio" />
      <h1>Portfolio</h1>
      <PortfolioItem />
    </div>
  );
};

export default Portfolio;

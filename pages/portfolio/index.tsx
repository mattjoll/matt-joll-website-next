import { GetStaticProps, NextPage } from 'next';
import PageHead from '../../components/PageHead';
import PortfolioItem from '../../components/PortfolioItem';
import { IPortfolioItem } from '../../interfaces/i-portfolio-item';
import { PortfolioService } from '../../services/portfolio.service';

type PortfolioProps = {
  portfolioItems: any;
};

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const portfolioItems = await PortfolioService.getPortfolioItems();

  return {
    props: { portfolioItems: portfolioItems },
    revalidate: 1800, // 30 minutes
  };
};

const Portfolio: NextPage<PortfolioProps> = (props) => {
  const portfolioItemElements = props.portfolioItems.map(
    (portfolioItem: IPortfolioItem) => (
      <PortfolioItem
        key={`${portfolioItem.id}`}
        portfolioItem={portfolioItem}
      />
    )
  );

  return (
    <div className="mt-20">
      <PageHead title="Portfolio" pageUrl="/portfolio" />
      <h1>Portfolio</h1>
      <div className="mt-5 space-y-5">{portfolioItemElements}</div>
    </div>
  );
};

export default Portfolio;

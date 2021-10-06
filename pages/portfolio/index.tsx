import { GetStaticProps, NextPage } from 'next';
import PageHead from '../../components/PageHead';
import PortfolioItem from '../../components/PortfolioItem';
import { IPortfolioItem } from '../../interfaces/i-portfolio-item';

type PortfolioProps = {
  portfolioItems: any;
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

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/portfolio`
  ).then((res) => res.json());

  return {
    props: { portfolioItems: response.portfolioItems },
    revalidate: 60,
  };
};

export default Portfolio;

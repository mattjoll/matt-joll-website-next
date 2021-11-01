import { IPortfolioItem } from '../interfaces/i-portfolio-item';
import { ContentfulUtils } from '../utils/contentful.utils';
import { ContentfulClientService } from './contentful.client.service';

/**
 * Services related to a portfolio.
 */
export class PortfolioService {
  /**
   * Retrieve a list of all portfolio items.
   * @returns A collection of all portfolio items.
   */
  public static async getPortfolioItems(): Promise<IPortfolioItem[]> {
    const client = ContentfulClientService.createClient();
    const contentfulResponse = await client.getEntries({
      content_type: 'portfolioItem',
      order: '-sys.createdAt',
    });

    const portfolioItems = contentfulResponse.items.map(
      ContentfulUtils.convertContentEntryToPortfolioItem
    );

    return portfolioItems;
  }
}

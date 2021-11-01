import { Entry } from 'contentful';
import { IPortfolioItem } from '../interfaces/i-portfolio-item';

/**
 * Utilities used to transform or parse contentful data.
 */
export class ContentfulUtils {
  /**
   * Convert an entry from the contentful API to a portfolio item used by the portfolio service.
   * @param entry - The entry from contentful.
   * @returns The transformed portfolio item.
   */
  public static convertContentEntryToPortfolioItem(
    entry: Entry<any>
  ): IPortfolioItem {
    return {
      description: entry.fields.description,
      id: entry.sys.id,
      imageUrl: `https://${entry.fields.image.fields.file.url}`,
      liveUrl: entry.fields.liveUrl || null,
      repoUrl: entry.fields.repoUrl || null,
      title: entry.fields.title,
    };
  }
}

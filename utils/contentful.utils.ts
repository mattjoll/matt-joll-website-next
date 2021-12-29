import { Entry } from 'contentful';
import { IBlogPost } from '../interfaces/i-blog-post';
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

  /**
   * Convert an entry from the contentful API to a blog post used by the blog service.
   * @param entry - The entry from contentful.
   * @returns The transformed blog post
   */
  public static convertContentEntryToBlogPost(entry: Entry<any>): IBlogPost {
    return {
      createdDate: entry.sys.createdAt,
      content: entry.fields.content,
      description: entry.fields.shortDescription,
      id: entry.sys.id,
      slug: entry.fields.slug,
      title: entry.fields.title,
    };
  }
}

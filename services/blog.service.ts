import { IBlogPost } from '../interfaces/i-blog-post';
import { ContentfulUtils } from '../utils/contentful.utils';
import { ContentfulClientService } from './contentful.client.service';

/**
 * Services related to the blog.
 */
export class BlogService {
  /**
   * Retrieve a list of all blog posts
   * @returns A collection of all blog posts.
   */
  public static async getBlogPosts(): Promise<IBlogPost[]> {
    const client = ContentfulClientService.createClient();
    const contentfulResponse = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });

    const blogPosts = contentfulResponse.items.map(
      ContentfulUtils.convertContentEntryToBlogPost
    );

    return blogPosts;
  }
}

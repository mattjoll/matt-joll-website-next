import { ContentfulClientApi, createClient } from 'contentful';

/**
 * A client service that wraps the Contentful Client library.
 * @see ContentfulClientApi
 */
export class ContentfulClientService {
  /**
   * Create a new instance of a contentful client to use for requests to contentful.
   */
  public static createClient(): ContentfulClientApi {
    const accessToken = process.env.CF_API_KEY || '';
    const space = process.env.CF_SPACE_ID || '';

    return createClient({
      accessToken: accessToken,
      space: space,
    });
  }
}

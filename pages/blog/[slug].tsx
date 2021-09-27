import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IBlogPost } from '../../interfaces/i-blog-post';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

type BlogPostProps = {
  blogPost: IBlogPost;
};

const BlogPost: NextPage<BlogPostProps> = (props) => {
  return (
    <article>
      <Head>
        <title>{props.blogPost.title} - Matt Joll</title>
        <meta
          name="description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:title" content="Matt Joll" />
        <meta
          name="og:description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:url" content="https://mattjoll.nz" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{props.blogPost.title}</h1>
        <div className="mt-2 mb-5 text-green-600">
          Posted on{' '}
          <time>
            {new Date(props.blogPost.createdDate).toLocaleDateString()}
          </time>
        </div>
      </header>
      <ReactMarkdown className="markdown">
        {props.blogPost.content}
      </ReactMarkdown>
    </article>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts: IBlogPost[] = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog/posts`
  )
    .then((res) => res.json())
    .then((res) => res.blogPosts);

  return {
    paths: blogPosts.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const blogPost: IBlogPost = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog/${params?.slug}`
  ).then((res) => res.json());

  return {
    props: { blogPost },
  };
};

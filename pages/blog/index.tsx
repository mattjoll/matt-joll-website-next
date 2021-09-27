import { GetStaticProps, NextPage } from 'next';
import { IBlogPost } from '../../interfaces/i-blog-post';
import BlogPostPreview from '../../components/BlogPostPreview';
import Head from 'next/head';

type BlogProps = {
  blogPosts: IBlogPost[];
};

const Blog: NextPage<BlogProps> = (props) => {
  const blogPostElements = props.blogPosts.map((blogPost: IBlogPost) => (
    <BlogPostPreview blogPost={blogPost} key={`${blogPost.id}-preview`} />
  ));

  return (
    <div>
      <Head>
        <title>Blog - Matt Joll</title>
        <meta
          name="description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:title" content="Matt Joll" />
        <meta
          name="og:description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:url" content="https://mattjoll.nz/blog" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <div className="grid auto-rows-auto gap-4 grid-cols-1 lg:grid-cols-2 mt-5">
        {blogPostElements}
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog/posts`
  ).then((res) => res.json());

  return {
    props: { blogPosts: response.blogPosts },
    revalidate: 60,
  };
};

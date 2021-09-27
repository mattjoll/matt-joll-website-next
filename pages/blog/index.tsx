import { GetStaticProps, NextPage } from 'next';
import { IBlogPost } from '../../interfaces/i-blog-post';
import BlogPostPreview from '../../components/BlogPostPreview';
import PageHead from '../../components/PageHead';

type BlogProps = {
  blogPosts: IBlogPost[];
};

const Blog: NextPage<BlogProps> = (props) => {
  const blogPostElements = props.blogPosts.map((blogPost: IBlogPost) => (
    <BlogPostPreview blogPost={blogPost} key={`${blogPost.id}-preview`} />
  ));

  return (
    <div>
      <PageHead title="Blog" pageUrl="/blog" />
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

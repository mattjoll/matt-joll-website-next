import { GetStaticProps, NextPage } from 'next';
import { IBlogPost } from '../../interfaces/i-blog-post';
import BlogPostPreview from '../../components/BlogPostPreview';
import PageHead from '../../components/PageHead';
import { BlogService } from '../../services/blog.service';

type BlogProps = {
  blogPosts: IBlogPost[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogPosts = await BlogService.getBlogPosts();

  return {
    props: { blogPosts: blogPosts },
    revalidate: 1800, // 30 minutes
  };
};

const Blog: NextPage<BlogProps> = (props) => {
  const blogPostElements = props.blogPosts.map((blogPost: IBlogPost) => (
    <BlogPostPreview blogPost={blogPost} key={`${blogPost.id}-preview`} />
  ));

  return (
    <div className="mt-20">
      <PageHead title="Blog" pageUrl="/blog" />
      <h1>Blog</h1>
      <div className="grid auto-rows-auto gap-4 grid-cols-1 lg:grid-cols-2 mt-5">
        {blogPostElements}
      </div>
    </div>
  );
};

export default Blog;

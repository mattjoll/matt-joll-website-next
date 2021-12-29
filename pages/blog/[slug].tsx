import { GetServerSideProps, NextPage } from 'next';
import { IBlogPost } from '../../interfaces/i-blog-post';
import ReactMarkdown from 'react-markdown';
import PageHead from '../../components/PageHead';
import { BlogService } from '../../services/blog.service';

type BlogPostProps = {
  blogPost: IBlogPost;
};

const BlogPost: NextPage<BlogPostProps> = (props) => {
  return (
    <article>
      <PageHead
        title={props.blogPost.title}
        type="article"
        pageUrl={`/blog/${props.blogPost.slug}`}
      />
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

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const blogPost = await BlogService.getBlogPostBySlug(slug);

  return {
    props: { blogPost },
  };
};

import { FunctionComponent } from 'react';
import { IBlogPost } from '../interfaces/i-blog-post';
import Link from 'next/link';

type BlogPostPreviewProps = {
  blogPost: IBlogPost;
};

const BlogPostPreview: FunctionComponent<BlogPostPreviewProps> = (props) => {
  return (
    <div className="p-4 rounded-lg shadow-lg">
      <div className="h-full flex flex-col">
        <h2>{props.blogPost.title}</h2>
        <div className="font-light my-2 text-sm">
          {new Date(props.blogPost.createdDate).toLocaleDateString()}
        </div>
        <div className="flex-grow">{props.blogPost.description}</div>
        <Link href={`/blog/${props.blogPost.slug}`}>
          <a className="cursor-pointer self-end mt-2 text-green-600">
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPreview;

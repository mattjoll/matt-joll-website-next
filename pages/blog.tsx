import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IBlogPost } from '../interfaces/i-blog-post';
import BlogPostPreview from '../components/BlogPostPreview';

const Blog: NextPage = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);

  useEffect(() => {
    const apiUrl = `${'http://localhost:3001'}/blog/posts`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setBlogPosts(res.blogPosts));
  }, []);

  const blogPostElements = blogPosts.map((blogPost: IBlogPost) => (
    <BlogPostPreview blogPost={blogPost} key={`${blogPost.id}-preview`} />
  ));

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid auto-rows-auto gap-4 grid-cols-1 lg:grid-cols-2 mt-5">
        {blogPostElements}
      </div>
    </div>
  );
};

export default Blog;

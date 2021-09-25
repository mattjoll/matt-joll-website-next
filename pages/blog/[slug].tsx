import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { IBlogPost } from '../../interfaces/i-blog-post';
import ReactMarkdown from 'react-markdown';

const BlogPost: NextPage = () => {
  const [blogPost, setBlogPost] = useState<IBlogPost>({
    createdDate: '',
    description: '',
    title: '',
    id: '',
    content: '',
    slug: '',
  });
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug == null) {
      return;
    }

    const apiUrl = `api/blog/${slug}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setBlogPost(res));
  }, [slug]);

  return (
    <article>
      <header>
        <h1>{blogPost.title}</h1>
        <div className="mt-2 mb-5 text-green-600">
          Posted on{' '}
          <time>{new Date(blogPost.createdDate).toLocaleDateString()}</time>
        </div>
      </header>
      <ReactMarkdown className="markdown">{blogPost.content}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export const ArticleContainer = styled.article`
  h1 {
    font-size: 3rem;
    color: #d9e3ea;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #d9e3ea;
  }
  img {
    width: 100%;
    overflow: hidden;
  }
  .feature-image {
    width: 100%;
    overflow: hidden;
  }
  .hero-image {
    margin: 2rem 0;
    width: 100%;
  }

  .prose p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    font-weight: 400;
  }
  .prose a {
    color: #5d5dff;
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  .prose strong {
    color: #d9e3ea;
    font-weight: 600;
  }
  ul {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    baclground: red;
  }
  li {
    list-style: inside;
    list-style-position: initial;
    margin-left: 2rem;
  }

  blockquote {
    font-weight: 500;
    font-style: italic;

    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-left: 1em;
    border-left-width: 0.25rem;
    border-left-color: #e5e7eb;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .rounded-full {
    border-radius: 50%;
  }
  .author-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

const CONTENT_API_KEY = '47225b98eaa1d61ea1463d34c0';
async function getPost(slug) {
  const res = await fetch(
    `https://koushith-portfolio-blog.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,published_at,reading_time`
  ).then((res) => res.json());

  console.log(res, 'res');
  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  console.log('PARAMNS', params);
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

const Post = (props) => {
  const { post } = props;

  const [enableLoadComments, setEnableLoadComments] = useState(false);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  function loadComments() {
    setEnableLoadComments(false);
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.slug;
    };

    const script = document.createElement('script');
    s.src = 'https://koushith-blog.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());
    console.log('scriptes', script);
    document.body.appendChild(script);
  }

  return (
    <>
      <ArticleContainer>
        <h1>{post.title}</h1>

        <MetaInfo>
          <div className='author-info'>
            <Image alt='Koushith Amin' height={24} width={24} src='/profile-pic.JPG' className='rounded-full' />

            <span className=''>{new Date(post.published_at).toDateString()}</span>
          </div>
          <p className=''>{post.reading_time} min read</p>
        </MetaInfo>

        <div className='hero-image'>
          <img src={post.feature_image} className='feature-image' />
        </div>

        <div className='prose ' dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </ArticleContainer>
    </>
  );
};

export default Post;

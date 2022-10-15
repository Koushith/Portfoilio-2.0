import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

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
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 31px;
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
  }
  li {
    list-style: inside;
    list-style-position: initial;
    margin-left: 2rem;
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 31px;
  }

  blockquote {
    border-color: var(--color-success);
    padding: 24px 32px;
    font-size: 17px;
    margin-top: 48px;
    margin-bottom: 64px;
    border-left: 3px solid;
    border-radius: 6px 6px 6px 3px;
    transition: background 350ms ease 0s;
    background: var(--color-success-background);
    background: var(--color-muted);
    border-color: var(--color-info);
  }

  iframe {
    width: 100%;
    height: auto;
  }

  figure {
    width: 100%;
    height: auto;
  }

  code {
    font-family: var(--font-family-mono);
    font-size: 18px;
    outline-offset: 2px;
    overflow: auto;
    margin-left: -32px;
    margin-right: -32px;
    padding: 32px;
    background: var(--syntax-bg);
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  margin: 2rem 0;

  p {
    font-size: 1.6rem;
    color: var(--color-gray-700);
  }
`;

const CONTENT_API_KEY = "47225b98eaa1d61ea1463d34c0";
async function getPost(slug) {
  const res = await fetch(
    `https://koushith-portfolio-blog.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,published_at,reading_time`
  ).then((res) => res.json());

  console.log(res, "res");
  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  console.log("PARAMNS", params);
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

    const script = document.createElement("script");
    s.src = "https://koushith-blog.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());
    console.log("scriptes", script);
    document.body.appendChild(script);
  }

  return (
    <>
      <ArticleContainer>
        <h1>{post.title}</h1>

        <MetaInfo>
          <p className="">{new Date(post.published_at).toDateString()}</p> |
          <p>{post.reading_time}min read</p>
        </MetaInfo>

        <div className="hero-image">
          <img src={post.feature_image} className="feature-image" />
        </div>

        <div
          className="prose "
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </ArticleContainer>
    </>
  );
};

export default Post;

import styled from 'styled-components';
import Link from 'next/link';

export const BlogContainer = styled.div`
  border-bottom: 1px solid #9ba9b4;
  display: flex;
  gap: 2rem;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  /* flex-wrap: wrap; */
  .date {
    flex: 0 0 200px;
    font-size: 1.6rem;
  }

  .title {
    color: #ebf1f5;
    line-height: 2.6rem;
    font-size: 1.8rem;
  }

  p {
    line-height: 2.6rem;
    font-size: 1.6rem;
    margin: 1.4rem 0 3.8rem 0;
  }
`;

export const BlogList = ({ post }) => {
  console.log('pst', post);
  return (
    <Link href='/posts/[slug] ' as={`/posts/${post?.slug}`}>
      <BlogContainer>
        <div className='date'>{new Date(post?.published_at).toDateString()}</div>
        <div className='post-info'>
          <h3 className='title'>{post?.title}</h3>

          <p>{post?.excerpt}</p>
        </div>
      </BlogContainer>
    </Link>
  );
};

import styled from 'styled-components';
import Link from 'next/link';

export const BlogCardContainer = styled.div`
  max-width: 30.2rem;
  /* align-self: stretch; */

  height: 100%;
  background: #25282c;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease 0s;
  justify-content: flex-end;
  .feature-image {
    height: 200px;
    background: #25282c;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
    transform-origin: 65% 75%;
    transition: transform 0.3s, filter 0.5s ease-out;
  }
  img:hover {
    /* transform: scale(1.1); */
  }
  &:hover {
    cursor: pointer;
    box-shadow: rgb(93, 93, 255) 0px 0px 14px;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;

export const Description = styled.div`
  h3 {
    color: #ebf1f5;
    font-size: 16px;
    line-height: 30px;
    weight: 500;
    line-height: 1.4;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: #9ba9b4;
    weight: 400;
  }
`;

export const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0;
  font-size: 1.6rem;
`;

export const BlogCard = ({ post }) => {
  return (
    <Link href='/posts/[slug] ' as={`/posts/${post?.slug}`}>
      <BlogCardContainer>
        <div className='feature-image'>
          <img src={post?.feature_image} alt='projectImage' />
        </div>
        <Container>
          <Description>
            <h3>{post?.title}</h3>
            {/* <p>Lorem, ipsum dolor sit sit amet consectetur sit amet consectetur adipisicing elit.</p> */}
          </Description>
          <MetaContainer>
            <p>
              <em> {post?.reading_time} mins</em>
            </p>

            <p>
              <em> {new Date(post?.published_at).toDateString()}</em>
            </p>
          </MetaContainer>
        </Container>
      </BlogCardContainer>
    </Link>
  );
};

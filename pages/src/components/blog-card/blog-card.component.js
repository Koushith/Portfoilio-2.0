import styled from 'styled-components';

export const BlogCardContainer = styled.div`
  max-width: 30.2rem;
`;

export const Container = styled.div`
  padding: 1rem;

  img {
    width: 100%;

    object-fit: cover;
    transform-origin: 65% 75%;
    transition: transform 0.3s, filter 0.5s ease-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.div`
  h3 {
    color: #ebf1f5;
    font-size: 20px;
    line-height: 33px;
    weight: 700;
    margin: 8px 0;
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
  margin: 1rem 0;
  /* img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  } */
`;

export const BlogCard = () => {
  return (
    <BlogCardContainer>
      <Container>
        <img src='/news-02.jpg' alt='projectImage' />

        <Description>
          <h3>EthDenver2022- A non custodial Wallet application</h3>
          {/* <p>Lorem, ipsum dolor sit sit amet consectetur sit amet consectetur adipisicing elit.</p> */}
        </Description>
        <MetaContainer>
          <p>
            <em> 2 Min Read</em>
          </p>

          <p>
            <em> 14-Jul-2021</em>
          </p>
        </MetaContainer>
      </Container>
    </BlogCardContainer>
  );
};

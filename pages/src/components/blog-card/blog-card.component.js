import styled from 'styled-components';

export const BlogCardContainer = styled.div`
  max-width: 30.2rem;

  background: #25282c;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease 0s;

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
`;

export const Description = styled.div`
  h3 {
    color: #ebf1f5;
    font-size: 16px;
    line-height: 30px;
    weight: 700;
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
`;

export const BlogCard = () => {
  return (
    <BlogCardContainer>
      <img src='/news-02.jpg' alt='projectImage' />
      <Container>
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

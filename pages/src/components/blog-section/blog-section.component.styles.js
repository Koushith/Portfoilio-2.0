import styled from 'styled-components';

export const BlogSectionContainer = styled.section`
  h2 {
    margin-bottom: 4rem;
  }
`;

export const BlogPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const ShowAllContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.8rem;
`;

export const Button = styled.button`
  background: #5d5dff;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #4b4acf;
  }
`;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BlogCard } from '../../blog-card/blog-card.component';
import { Pill } from '../../pill/pill.component';
import Link from 'next/link';
const BlogsPageContainer = styled.section`
  margin: 2rem 0;
  margin: 0 auto;
  width: 95%;
`;

export const BlogsContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem auto;
`;

export const FileterContainer = styled.div`
  margin: 1rem 0 2rem 0;
  p {
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .category {
    display: flex;
    align-self: center;
    gap: 1rem;
  }
`;
export const ListsContainer = styled.div``;

export const getStaticProps = async () => {
  const tags = await axios.get(
    'https://koushith-portfolio-blog.herokuapp.com//ghost/api/v3/content/tags/?key=47225b98eaa1d61ea1463d34c0'
  );
  console.log('tt', tags);
  return {
    props: { tags },
    revalidate: 10,
  };
};

// todo- fix later;

export const BlogPage = ({ posts }, props) => {
  return (
    <BlogsPageContainer>
      <h2>All Posts</h2>
      <FileterContainer>
        <p>TOP CATEGORIES</p>
        <CategoryContainer>
          <div className='category'>
            <Pill color='7' content='React' pointer />
            <Pill color='7' content='TypeScript' pointer />
            <Pill color='7' content='Life' pointer />
            <Pill color='7' content='Others' pointer />
            <Pill color='7' content='Lols' pointer />
          </div>
          <div className='layout' style={{ background: 'aqua' }}>
            <i className='fa-solid fa-sort'></i>
            <i className='fa-solid fa-list'></i>
            <i className='fa-solid fa-grid'></i>
            <i className='fa-solid fa-list'></i>
            <i className='fa-brands fa-github' />
          </div>
        </CategoryContainer>
      </FileterContainer>
      <BlogsContainer>
        {posts.map((post, index) => (
          <BlogCard post={post} />
        ))}
      </BlogsContainer>
      <ListsContainer>{/* <BlogList /> */}</ListsContainer>
    </BlogsPageContainer>
  );
};

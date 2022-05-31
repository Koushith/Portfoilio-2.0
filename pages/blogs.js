import React from 'react';
import styled from 'styled-components';
import { BlogCard } from './src/components/blog-card/blog-card.component';
import { Pill } from './src/components/pill/pill.component';
import { ProjectCard } from './src/components/project-card/project-card.component';

const BlogsPageContainer = styled.section`
  margin: 2rem 0;

  margin: 0 auto;
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

function Blogs() {
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
          <div>
            {/* <i class='fa-solid fa-sort'></i> */}
            ji
          </div>
        </CategoryContainer>
      </FileterContainer>
      <BlogsContainer>
        <BlogCard />
        <BlogCard /> <BlogCard /> <BlogCard />
        <BlogCard /> <BlogCard />
        <BlogCard />
        <BlogCard /> <BlogCard />
      </BlogsContainer>
    </BlogsPageContainer>
  );
}

export default Blogs;

import React from 'react';
import styled from 'styled-components';
import { BlogCard } from './src/components/blog-card/blog-card.component';
import { ProjectCard } from './src/components/project-card/project-card.component';

const BlogsPageContainer = styled.section`
  margin: 2rem 0;
`;

export const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

function Blogs() {
  return (
    <BlogsPageContainer>
      <h2>All Posts</h2>

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

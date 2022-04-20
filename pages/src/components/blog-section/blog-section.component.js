import { BlogCard } from '../blog-card/blog-card.component';
import { Container } from '../common/container/container.component';
import { BlogSectionContainer, BlogPostContainer, ShowAllContainer, Button } from './blog-section.component.styles';

export const BlogSection = () => {
  return (
    <BlogSectionContainer>
      <Container>
        <h2>Recent Blog Posts</h2>
        <BlogPostContainer>
          <BlogCard />
          <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard />
        </BlogPostContainer>
        <ShowAllContainer>
          <Button>See All Posts</Button>
        </ShowAllContainer>
      </Container>
    </BlogSectionContainer>
  );
};

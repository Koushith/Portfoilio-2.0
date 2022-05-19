import { useRouter } from 'next/router';
import { BlogCard } from '../blog-card/blog-card.component';
import { Container } from '../common/container/container.component';
import { BlogSectionContainer, BlogPostContainer, ShowAllContainer, Button } from './blog-section.component.styles';

export const BlogSection = () => {
  const router = useRouter();
  return (
    <BlogSectionContainer>
      <Container>
        <h2>Latest Posts</h2>
        {/* search and filter options */}
        <BlogPostContainer>
          <BlogCard />
          <BlogCard /> <BlogCard />
        </BlogPostContainer>
        <ShowAllContainer>
          <Button onClick={() => router.push('/blogs')}>See All Posts</Button>
        </ShowAllContainer>
      </Container>
    </BlogSectionContainer>
  );
};

import { useRouter } from 'next/router';
import { BlogCard } from '../blog-card/blog-card.component';
import { Container } from '../common/container/container.component';
import { UnderlinedButton } from '../primitives/button/button.component';
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
          <UnderlinedButton onClick={() => router.push('/blogs')} content='See All Posts' />
        </ShowAllContainer>
      </Container>
    </BlogSectionContainer>
  );
};

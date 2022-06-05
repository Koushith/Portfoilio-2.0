import axios from 'axios';
import { BlogPage } from './src/components/page-components/blog-page/blog-pagelayout.component';

const CONTENT_API_KEY = '47225b98eaa1d61ea1463d34c0';

async function getPosts() {
  // "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"

  const res = await fetch(
    `https://koushith-portfolio-blog.herokuapp.com//ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  // const tags = await axios.get(
  //   'https://koushith-portfolio-blog.herokuapp.com//ghost/api/v3/content/tags/?key=47225b98eaa1d61ea1463d34c0'
  // );
  // console.log('tagssss', tags);
  return {
    props: { posts },
    revalidate: 10,
  };
};

function Blogs(props) {
  const { posts } = props;
  return <BlogPage posts={posts} />;
}

export default Blogs;

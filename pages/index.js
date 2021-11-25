import Link from "next/link";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../utils/mdx";
// inspo: http://ourwildabandon.com/
export default function BlogList({ posts }) {
  return (
    <div className="container mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {posts.map((post, index) => (
          <Link href={`posts/${post.slug}`}>
            <PostCard post={post}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
import { Link } from "react-router";
import type { Blogs } from "~/types";

type LatestPostsProps = {
  posts: Blogs[];
  limit: number;
}

const LatestPosts = ({ posts, limit=3 }:LatestPostsProps) => {
  const sorted = [...posts].sort((a:Blogs, b:Blogs) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })

  const latest = sorted.slice(0, limit); //limit from 0 to 3 limit value

  return ( 
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Latest Posts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {latest.map((post) => (
          <Link 
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="shadow-card 
           transform transition duration-300 hover:scale-[1.02]
            block p-4 border border-gray-700 rounded-lg
           bg-gray-900 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">
              {post.title}
            </h3>
            <p className="block mt-3 text-xs text-gray-400">{post.excerpt}</p>

            <span className="block text-end mt-3 text-xs text-gray-400">
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
    </section>
   );
}
 
export default LatestPosts;
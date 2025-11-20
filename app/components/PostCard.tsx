import type { Blogs } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: {post: Blogs}) => {
  return ( 
    <article className="bg-gray-900 p-6 rounded-lg my-4 border border-gray-700 shadow-card">
      <h3 className="text-2xl font-semibold text-indigo-400">
        {post.title}
      </h3>

      <p className="text-gray-300 mb-4">
        {post.excerpt}
      </p>

      {post.image && (
        <img src={post.image} alt={post.title} 
        className="w-full h-88 object-cover rounded mb-4"
        />
      )}

      <Link to={`/blog/${post.slug}`} className="text-blue-400 text-sm hover:underline">
        Read More
      </Link>

      <p className="text-sm text-gray-400 flex justify-end">
        {new Date(post.date).toDateString()}
      </p>
    </article>
   );
}
 
export default PostCard;
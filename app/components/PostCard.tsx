import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: {post: PostMeta}) => {
  return ( 
    <article className="bg-gray-900 p-6 rounded-lg my-4 shadow">
      <h3 className="text-2xl font-semibold text-indigo-400">
        {post.title}
      </h3>

      <p className="text-gray-300 mb-4">
        {post.excerpt}
      </p>
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
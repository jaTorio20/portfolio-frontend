import { useState } from "react";

import type { Route } from "./+types/index"; 
import type { PostMeta } from "~/types"; //modeling data types
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";

export async function loader( { request }:Route.LoaderArgs):Promise<{posts: PostMeta[]}>{ //{posts: PostMeta} set model types
  const url = new URL('/posts-meta.json', request.url); //accessing public folder and filename
  const res = await fetch(url.href); //.href(https://myapp.com/posts-meta.json) comes to the property of URL

  if(!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  data.sort((a:PostMeta, b:PostMeta) => { //2nd parameter is sorting to newest first
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { posts: data }; //add posts here as well for typechecking
}

const BlogPage = ({loaderData}:Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const {posts} = loaderData;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return ( 
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6">

        <h2 className="text-3xl text-white font-bold mb-8">
          Blog
        </h2>
        {currentPosts.map((post) => (
          <PostCard post={post} key={post.slug}/>
        ))}

        {
          totalPages > 1 && (
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            />
          )
        }
      </div>
   );
}
 
export default BlogPage;
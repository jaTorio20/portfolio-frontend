import { useState } from "react";

import type { Route } from "./+types/index"; 
import type { Blogs, StrapiResponse, StrapiPost } from "~/types"; //modeling data types
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader( { request }:Route.LoaderArgs):Promise<{posts: Blogs[]}>{ //{posts: Blogs} set model types
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs?populate=image&sort=date:desc`);

  if(!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiResponse<StrapiPost> = await res.json();

  const blogs = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` :
    `/images/no-image.png`,
  }))

  return { posts: blogs }; //add posts here as well for typechecking
}

const BlogPage = ({loaderData}:Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const {posts} = loaderData;

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) 
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return ( 
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6">


        <PostFilter searchQuery={ searchQuery } onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}/>

        <div className="space-y-8">
          {currentPosts.length === 0 ? (
            <p className="text-gray-400 text-center">
              No blog found
            </p>
          ) : (
            currentPosts.map((post) => (
              <PostCard post={post} key={post.slug}/>
            ))
          ) }
        </div>


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
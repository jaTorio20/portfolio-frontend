import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/DetailsPage';
import type { Blogs, StrapiResponse, StrapiPost } from '~/types';
import { Link } from 'react-router';
import { LiaArrowLeftSolid } from "react-icons/lia";

export async function loader({ request, params }:Route.LoaderArgs){
  const { slug } = params;

  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs/?filters[slug][$eq]=${slug}&populate=image`);


  if(!res.ok) throw new Error('Failed to fetch data');

  const json:StrapiResponse<StrapiPost> = await res.json();

  if(!json.data.length) throw new Response('Not found', { status: 404 })

  const item = json.data?.[0]; //since its accessing single data its always put 0 as starting in the array

  const post ={
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` :
    `/images/no-image.png`,
  }


  return {post};
}

type DetailsPageBlogPostProps = {
  loaderData: {
    post: Blogs
  };
};

const DetailsPageBlogPost = ({loaderData}:DetailsPageBlogPostProps)=> {
  const {post} = loaderData;


  return ( 
 <div className='max-w-3xl mx-auto px-6 py-12 '>
    <h1 className="text-3xl font-bold text-indigo-400 mb-2">
      {post.title}
    </h1>


    <div className="prose prose-invert max-w-none mb-12">
      {/* converting markdown to an html use ReactMarkdown */}
      <ReactMarkdown> 
        {post.body}
      </ReactMarkdown>
    </div>

        {post.image && (
        <img src={post.image} alt={post.title} 
        className="w-full h-88 object-cover rounded-md mb-4 shadow-card"
        />
      )}

    <p className="flex justify-end text-sm text-gray-400 mb-6">
      { new Date(post.date).toDateString() }
    </p>

    <Link to={`/blog`} className='inline-block text-white rounded-lg hover:underline transition'>
      <div className='flex items-center justify-center space-x-2'>
        <LiaArrowLeftSolid/>
        
        <span>
         Back To Posts
        </span>
      </div>
    </Link>
 </div>
   );
}
 
export default DetailsPageBlogPost;
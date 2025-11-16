import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/DetailsPage';
import type { PostMeta } from '~/types';
import { Link } from 'react-router';
import { LiaArrowLeftSolid } from "react-icons/lia";

export async function loader({ request, params }:Route.LoaderArgs){
  const { slug } = params;

  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if(!res.ok) throw new Error('Failed to fetch data');

  const index = await res.json();

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if(!postMeta) throw new Response('Not found', { status: 404 })

  // Dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default
  };
}

type DetailsPageBlogPostProps = {
  loaderData: {
    postMeta: PostMeta,
    markdown: string,
  };
};

const DetailsPageBlogPost = ({loaderData}:DetailsPageBlogPostProps)=> {
  const {postMeta, markdown} = loaderData;


  return ( 
 <div className='max-w-3xl mx-auto px-6 py-12 '>
    <h1 className="text-3xl font-bold text-indigo-400 mb-2">
      {postMeta.title}
    </h1>


    <div className="prose prose-invert max-w-none mb-12">
      {/* converting markdown to an html use ReactMarkdown */}
      <ReactMarkdown> 
        {markdown}
      </ReactMarkdown>
    </div>

    <p className="flex justify-end text-sm text-gray-400 mb-6">
      { new Date(postMeta.date).toDateString() }
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
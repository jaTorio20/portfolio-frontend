import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project, StrapiPost, StrapiProject, StrapiResponse } from "~/types";
import type { Blogs } from "~/types";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Welcome" },
    { name: "description", content: "Custom portfolio dev development" },
  ];
}

export async function loader({ request }: Route.LoaderArgs)
: Promise<{projects:Project[]; posts: Blogs[]}>{
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),     
    fetch(`${import.meta.env.VITE_API_URL}/blogs?sort[0]=date:desc&populate=*`)
  ]);

  if(!projectRes.ok || !postRes.ok){
    throw new Error('Failed to fetch data');
  }
  const projectJson:StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson:StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` :
    `/images/no-image.png`,
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
    stack: item.stack
  }));
  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` :
    `/images/no-image.png`,
    date: item.date
  }));

  return {projects, posts};
}

const HomePage = ({ loaderData }:Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
  <>
    <FeaturedProjects projects={projects} count={6}/>
    <LatestPosts posts={posts} limit={4}/>
  </>
  )
}

export default HomePage;

import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project, StrapiPost,  StrapiProject, StrapiResponse, StrapiStack } from "~/types";
import type { Blogs, Stack } from "~/types";
import LatestPosts from "~/components/LatestPosts";
import TechStack from "~/components/TechStack";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Welcome" },
    { name: "description", content: "Custom portfolio dev development" },
  ];
}

export function headers({}: Route.HeadersArgs) {
  return {
    "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
  };
}

export async function loader({ request }: Route.LoaderArgs)
: Promise<{projects:Project[]; posts: Blogs[]; stacks: Stack[]}>{
  // Optimize populate queries - only fetch needed fields instead of populate=*
  const [projectRes, postRes, stackRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=image`),     
    fetch(`${import.meta.env.VITE_API_URL}/blogs?sort[0]=date:desc&populate=image&pagination[limit]=4`),
    fetch(`${import.meta.env.VITE_API_URL}/techstacks?populate=image`)
  ]);

  if(!projectRes.ok || !postRes.ok || !stackRes.ok){
    throw new Error('Failed to fetch data');
  }
  const projectJson:StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson:StrapiResponse<StrapiPost> = await postRes.json();
  const stackJson:StrapiResponse<StrapiStack> = await stackRes.json();

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
  const stacks = stackJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    stack: item.stack,
    image: item.image?.url ? `${item.image.url}` :
    `/images/no-image.png`,
    description: item.description,
    link: item.link
  }));

  return {projects, posts, stacks};
}

const HomePage = ({ loaderData }:Route.ComponentProps) => {
  const { projects, posts, stacks } = loaderData;

  return (
  <>
    <FeaturedProjects projects={projects} count={6}/>
    <LatestPosts posts={posts} limit={4}/>
    <TechStack stacks={stacks}/>
  </>
  )
}

export default HomePage;

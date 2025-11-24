import { Outlet } from "react-router";
import Hero from "~/components/Hero";
import AboutPreview from "~/components/AboutPreview";
import FooterPage from "~/components/Footer";
const HomeLayout = () => {
  return ( 
    <>
    <Hero name="John Ashley Torio" text="Aspiring Full Stack Software Engineer"/>
      <section className="max-w-6xl mx-auto px-6 my-8">
        {/* Outlet is come from routes.tsx  which is:
         layout('./routes/layouts/home.tsx', [index("routes/home/index.tsx")]),
        */}
        <Outlet/> 

        <AboutPreview/>
      </section>

      <FooterPage/>
    </>
   );
}
 
export default HomeLayout;
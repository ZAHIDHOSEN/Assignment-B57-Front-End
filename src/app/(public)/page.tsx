import Home from "@/components/module/Home/Home";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import BlogPage from "./blog/page";
import ProjectPage from "./project/page";




export default function HomePage() {
  return (
    
     <div className="py-5">
      <Home></Home>
      <About></About>
      <ProjectPage></ProjectPage>
      <BlogPage></BlogPage>
      <Contact></Contact>

     </div>

   
  );
}

import { About } from "@/components/about/About";
import { Experience } from "@/components/projects/Experience";

function AboutPage() {
  return (
    <div>
      <main className="flex gap-10 h-[86dvh]">
        <div className="w-1/2">
          <About id="about" />
        </div>
        <div className="w-1/2">
          <Experience id="experience" />
        </div>
      </main>
    </div>
  );
}

export default AboutPage;

import { About } from "@/components/about/About";
import { Experience } from "@/components/about/Experience";

function AboutPage() {
  return (
    <main className="flex-1 flex gap-10 px-6 py-12">
      <div className="w-1/2">
        <About id="about" />
      </div>
      <div className="w-1/2">
        <Experience id="experience" />
      </div>
    </main>
  );
}

export default AboutPage;

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

function AboutPage() {
  return (
    <div>
      <main className="flex gap-10 h-dvh">
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

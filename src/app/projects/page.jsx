import { redirect } from "next/navigation";

// El contenido de esta vista ahora vive en el modal "Projects"
// del workflow del home.
export default function ProjectsPage() {
  redirect("/home");
}

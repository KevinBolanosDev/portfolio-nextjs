import { redirect } from "next/navigation";

// El contenido de esta vista ahora vive en el modal "About me"
// del workflow del home.
export default function AboutPage() {
  redirect("/home");
}

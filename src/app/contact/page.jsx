import { redirect } from "next/navigation";

// El contenido de esta vista ahora vive en el modal "Contact"
// del workflow del home.
export default function ContactPage() {
  redirect("/home");
}

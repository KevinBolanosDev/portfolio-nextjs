import { Github, Linkedin, Mail } from "lucide-react";

/** El link de Email lleva subject/body traducibles, por eso es una función. */
export function getSocialLinks({ mailSubject, mailBody }) {
  return [
    {
      name: "GitHub",
      href: "https://github.com/kevinbolanosdev",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/kevinbolanosdev",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=im.kevinbolanos.dev@gmail.com&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`,
      icon: Mail,
    },
  ];
}

import { cookies } from "next/headers";
import { WorkflowExperience } from "@/components/workflow";
import { LOCALE_COOKIE, resolveLocale } from "@/lib/i18n/config";

const DESCRIPTION_BY_LOCALE = {
  es: "Portafolio interactivo de Kevin Bolaños: ejecuta el workflow y descubre cada sección como un pipeline de automatización con agentes de IA.",
  en: "Kevin Bolaños' interactive portfolio: run the workflow and discover each section like an automation pipeline with AI agents.",
};

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LOCALE_COOKIE)?.value);

  return {
    title: "Kevin Bolaños — Portfolio Workflow",
    description: DESCRIPTION_BY_LOCALE[locale],
  };
}

function HomePage() {
  return <WorkflowExperience />;
}

export default HomePage;

import Hero from "~/component/hero/hero";
import ProjectSection from "~/component/project";
import { heroData } from "~/data";
import Layout from "~/component/layout";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Fikri Alwan Ramadhan | Projects",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      <Hero isHome={false} data={heroData.projects} />
      <ProjectSection isHome={false} />
    </Layout>
  );
}

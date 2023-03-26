import Hero from "~/component/hero/hero";
import ProjectSection from "~/component/project";
import { heroData } from "~/data";
import Layout from "~/component/layout";

export default function Index() {
  return (
    <Layout>
      <Hero isHome={false} data={heroData.projects} />
      <ProjectSection isHome={false} />
    </Layout>
  );
}

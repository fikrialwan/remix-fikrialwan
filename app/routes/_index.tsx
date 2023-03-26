import AboutSection from "~/component/about";
import Experience from "~/component/experience";
import Hero from "~/component/hero/hero";
import ProjectSection from "~/component/project";
import { aboutHomeData, heroData } from "~/data";
import Layout from "~/component/layout";

export default function Index() {
  return (
    <Layout>
      <Hero isHome={true} data={heroData.home} />
      <AboutSection isHome={true} data={aboutHomeData} />
      <Experience />
      <ProjectSection isHome={true} />
    </Layout>
  );
}

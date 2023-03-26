import AboutSection from "~/component/about";
import Hero from "~/component/hero/hero";
import { aboutData, heroData } from "~/data";
import type { AboutDataType } from "~/data";
import Layout from "~/component/layout";

export default function Index() {
  return (
    <Layout>
      <Hero isHome={false} data={heroData.about} />
      {aboutData.map((data: AboutDataType, key: number) => {
        return <AboutSection isHome={false} data={data} key={key} />;
      })}
    </Layout>
  );
}

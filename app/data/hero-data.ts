import { ButtonType, ImgType } from "~/util/types";
import homeIlustration from "~/component/ui/images/hero-home-illustration.webp";
import aboutIlustration from "~/component/ui/images/hero-about-illustration.webp";
import projectsIlustration from "~/component/ui/images/hero-project-illustration.webp";

export interface HeroContentType {
  greeting?: string;
  title: string;
  desc: string;
  img: ImgType;
  descHighlight?: string;
  button?: ButtonType;
}

export interface HeroDataType {
  home: HeroContentType;
  about: HeroContentType;
  projects: HeroContentType;
}

export const heroData: HeroDataType = {
  home: {
    greeting: "Hello,",
    title: "I'm Fikri Alwan\nRamadhan",
    desc: "a",
    descHighlight: "Front End Web Developer",
    img: {
      url: homeIlustration,
      alt: "Home hero illustration",
    },
    button: {
      title: "Download CV",
      link: "https://drive.google.com/uc?id=1r7uxu7mrODHEip6FzoYpUS7JqEkLTQHv&export=download",
    },
  },
  about: {
    title: "Hello,\nI'm Fikri Alwan Ramadhan,\nI'm a Front End Web Developer",
    desc: "I'm a developer who enthusiasm for Javascript, Typescript and React.",
    img: {
      url: aboutIlustration,
      alt: "About hero illustration",
    },
  },
  projects: {
    title: "This is my project,",
    desc: "You can see all of my project that I built, contributed, or designed using various technologies.",
    img: {
      url: projectsIlustration,
      alt: "Project hero illustration",
    },
  },
};

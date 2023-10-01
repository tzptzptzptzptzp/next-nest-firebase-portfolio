import { switchingLang } from "./switchingLang.type";

export type dataType = {
  profile: profileType;
  content: contentType;
};

export type profileType = {
  occupation: occupationType;
  date: dateType;
} & nameType &
  linksType;

export type nameType = {
  name: switchingLang;
  nickname: string;
};

export type occupationType = switchingLang;

export type dateType = {
  birth: string;
  engineering: string;
};

export type linksType = {
  sns: {
    github: string;
    x: string;
    instagram: string;
  };
  link: string[];
};

export type contentType = {
  aboutMeData: aboutMeType;
  favoriteData: favoriteType;
  enhancingData: enhancingType;
  skillData: skillType;
  projectData: projectType;
  portfolioData: portfolioType;
  careerData: careerType;
  experienceData: experienceType;
};

export type aboutMeType = switchingLang;

export type favoriteType = string[];

export type enhancingType = string[];

export type skillType = skillItemType[];

export type skillItemType = {
  sectionTitle: string;
  skillSet: skillSetType[];
};

export type skillSetType = {
  icon: string;
  name: string;
  rate: number;
};

export type projectType = projectItemType[];

export type projectItemType = {
  title: switchingLang;
  description: switchingLang;
  technology: string[];
  completion_date: string;
};

export type portfolioType = portfolioItemType[];

export type portfolioItemType = {
  name: string;
  description: string;
  link: string;
  technology: string[];
};

export type careerType = careerItemType[];

export type careerItemType = {
  name: switchingLang;
  description: switchingLang;
  join: string;
  leave: string;
  link: string;
};

export type experienceType = {
  technology: string;
  application: string;
};

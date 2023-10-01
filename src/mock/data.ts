import { profileData as profile } from "./profile";
import { aboutMeData } from "./aboutMe";
import { favoriteData } from "./favorite";
import { skillData } from "./skill";
import { projectData } from "./project";
import { portfolioData } from "./portfolio";
import { careerData } from "./career";
import { experienceData } from "./experience";

const enhancingData = favoriteData;

export const data = {
  profile,
  content: {
    aboutMeData,
    favoriteData,
    enhancingData,
    skillData,
    projectData,
    portfolioData,
    careerData,
    experienceData,
  },
};

// If the data is in outside of public folder

// import { AboutMe } from '../types';
// import aboutMeData from '../data/aboutMe.json';

import { AboutMe } from "@/types/about-me";
import aboutMeData from "@/data/about-me.json";

export const getAboutMe = (): AboutMe => {
  return aboutMeData;
};


// Usage:
// import { getAboutMe } from '../utils/getAboutMe';
// const aboutMe = getAboutMe();

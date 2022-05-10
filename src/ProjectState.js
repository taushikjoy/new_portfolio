import { v4 as uuidv4 } from "uuid";
import theracer from "./img/theracer-small.png";

import projectCover1 from "./img/capture.jpg";
import projectCover2 from "./img/musiccover.jpg";
import projectCover3 from "./img/projectone3.jpg";
import ecommercecover from "./img/ecommercecover.jpg";
////
import ecommerceOne from "./img/ecommerceOne.jpg";
import ecommerceTwo from "./img/ecommerceTwo.jpg";
import ecommerceThree from "./img/ecommerceThree.jpg";
////
import projectone1 from "./img/capture.jpg";
import projectone2 from "./img/capture2.jpg";
import projectone3 from "./img/capture3.jpg";
////
import projecttwo1 from "./img/music1.jpg";
import projecttwo2 from "./img/music2.jpg";
import projecttwo3 from "./img/music3.jpg";
export const ProjectState = () => {
  return [
    {
      id: uuidv4(),
      class: "abcd abcd1",
      title: "Underworld Ecommerce",
      coverPhoto: ecommercecover,
      fisrtImage: ecommerceOne,
      secondImage: ecommerceTwo,
      thirddImage: ecommerceThree,
      url: "/project/ecommerce",
      githubRepo: "https://github.com/taushikjoy/Capture-Portfolio",
      liveLink: "https://react-capture-portfolio-taushikjoy.netlify.app",
      desc: "jdfhsvbcjhsdfvbjhdfbvh",
    },
    {
      id: uuidv4(),
      class: "abcd abcd2",
      title: "The Capture Portfolio",
      coverPhoto: projectCover1,
      fisrtImage: projectone1,
      secondImage: projectone2,
      thirddImage: projectone3,
      url: "/project/capture",
      githubRepo: "https://github.com/taushikjoy/Capture-Portfolio",
      liveLink: "https://react-capture-portfolio-taushikjoy.netlify.app",
      desc: "jdfhsvbcjhsdfvbjhdfbvh",
    },
    {
      id: uuidv4(),
      class: "abcd abcd3",
      title: "The React Music App",
      coverPhoto: projectCover2,
      fisrtImage: projecttwo1,
      secondImage: projecttwo2,
      thirddImage: projecttwo3,
      url: "/project/racer",
      githubRepo: "https://github.com/taushikjoy/React-Music-App",
      desc: "jdfhsvbcjhsdfvbjhdfbvh",
    },
    {
      id: uuidv4(),
      title: "The Foodgram Dashboard",
      class: "abcd abcd4",
      coverPhoto: projectCover2,
      fisrtImage: theracer,
      secondImage: theracer,
      thirddImage: projectone3,
      url: "/project/racer",
    },
  ];
};

import theracer from "./img/theracer-small.png";

import theracer2 from "./img/the-racer2.jpg";
import projectone1 from "./img/capture.jpg";
import projectone2 from "./img/capture2.jpg";
import projectone3 from "./img/capture3.jpg";
import projecttwo1 from "./img/music1.jpg";
import projecttwo2 from "./img/music2.jpg";
import projecttwo3 from "./img/music3.jpg";
export const ProjectState = () => {
  return [
    {
      title: "The Capture Portfolio",
      fisrtImage: projectone1,
      secondImage: projectone2,
      thirddImage: projectone3,
      url: "/project/capture",
      githubRepo: "https://github.com/taushikjoy/new_portfolio",
      liveLink: "https://react-capture-portfolio-taushikjoy.netlify.app",
    },
    {
      title: "The React Music App",
      fisrtImage: projecttwo1,
      secondImage: projecttwo2,
      thirddImage: projecttwo3,
      url: "/project/racer",
      githubRepo: "https://github.com/taushikjoy/React-Music-App",
    },
    {
      title: "The Foodgram Dashboard",
      fisrtImage: theracer,
      secondImage: theracer2,
      thirddImage: projectone3,
      url: "/project/racer",
    },
  ];
};

// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import React from "react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "DN3RO";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;
export const BugCrowd = <Icon icon="simple-icons:bugcrowd" />;


/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hey! I'm Nir, leading an Adversarial Tactics Team at Sygnia. I specialize in Red Team operations and Web Application Penetration Testing. Beyond my professional life, I’m also a private pilot. I've worked with foreign armies and Fortune 100 companies, gaining a diverse skill set in cybersecurity. Always up for a new challenge!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:ninja" className="display-4" />,
    name: "Red Team",
  },
  {
    id: 2,
    skill: <Icon icon="ic:baseline-phishing" className="display-4" />,
    name: "Phishing",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:application-braces" className="display-4" />,
    name: "Web Application",
  },
  {
    id: 4,
    skill: <Icon icon="ion:hardware-chip" className="display-4" />,
    name: "Physical Security",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:lecturn" className="display-4" />,
    name: "Public Speaker",
  },
  {
    id: 6,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:cplusplus" className="display-4" />,
    name: "C++",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:csharp" className="display-4" />,
    name: "C#",
  },
  {
    id: 9,
    skill: <Icon icon="fontisto:python" className="display-4" />,
    name: "Python",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mleqqgbl";

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pravallika Methuku",
  title: "Hi all, I'm Pravallika",
  subTitle: emoji(
    "A passionate Data Platform Engineer 🚀 having an experience of building scalable, secure and governed data platforms on AWS & Snowflake."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1avSICj7KSR_gNwl2p3RMZtgj8IJyG1ld/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pravallika-krishna",
  linkedin: "https://www.linkedin.com/in/pravallikam4/",
  gmail: "pravallikamethuku@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Expertise",
  subTitle:
    "Experienced Data Engineer with expertise in Snowflake, AWS, SQL, Python, Data Governance and Cloud Platform Engineering.",

  skills: [
    emoji(
      "⚡ Design and support scalable cloud data platforms using Snowflake and AWS"
    ),
    emoji(
      "⚡ Build data ingestion, transformation and analytics solutions using SQL, Python and ETL tools"
    ),
    emoji(
      "⚡ Implement Snowflake administration, RBAC, security controls and platform governance"
    ),
    emoji(
      "⚡ Automate cloud operations, monitoring and infrastructure using Terraform and DevOps practices"
    ),
    emoji(
      "⚡ Optimize data warehouse performance, cost management and operational excellence"
    )
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Snowflake", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Platform Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps & Automation",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer",
      company: "NatWest Group",
      companylogo: require("./assets/images/natwestlogo.png"),
      date: "December 2022 – Present",

      desc: "Working as a Data Platform Engineer supporting enterprise-scale Snowflake environments and cloud governance initiatives. Responsible for platform administration, security, onboarding, operational excellence, and cloud risk management.",

      descBullets: [
      "Managed Snowflake platform administration including RBAC, user provisioning and access governance",
      "Onboarded business domains and supported enterprise-scale Snowflake environments",
      "Resolved production incidents and platform issues to ensure operational stability",
      "Partnered with engineering teams on integrations, automation and platform enhancements",
      "Worked on AWS governance, cloud controls, vulnerability management and compliance reporting"
]
    },

    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcslogo.png"),
      date: "June 2022 – December 2022",

      desc: "Worked on enterprise web application development and enhancement projects, contributing to application design, development and support activities.",

      descBullets: [
        "Developed and maintained web-based applications using .NET technologies and SQL Server",
        "Collaborated with business stakeholders and development teams to implement new features and enhancements",
        "Performed application testing, debugging and issue resolution to ensure stable releases",
        "Participated in software development lifecycle activities including development, deployment and production support"
      ]
    },

    {
      role: "Software Analyst",
      company: "Cognizant",
      companylogo: require("./assets/images/cognizantlogo.png"),
      date: "December 2018 – June 2022",

      desc: "Started my professional career as a Software Analyst, working on enterprise applications with a strong focus on SQL development, data processing and .NET application support.",

      descBullets: [
        "Worked on .NET application development, maintenance and enhancement activities",
        "Performed data analysis, validation and troubleshooting to ensure data accuracy and system reliability",
        "Collaborated with cross-functional teams to gather requirements and deliver technology solutions",
        "Provided production support, incident resolution and application monitoring for critical business systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Key Data Engineering & Cloud Initiatives",

  projects: [
    {
      image: require("./assets/images/snowflakelogo.png"),

      projectName: "Enterprise Snowflake Data Platform",

      projectDesc:
        "Managed and supported enterprise-scale Snowflake environments across multiple business domains. Responsible for RBAC implementation, access governance, domain onboarding, production support and platform optimization.",

      footerLink: [
        {
          name: "Snowflake Platform Engineering"
        }
      ]
    },

    {
      image: require("./assets/images/awslogo.png"),

      projectName: "AWS Governance & Compliance Framework",

      projectDesc:
        "Supported cloud governance initiatives by improving visibility into vulnerabilities, compliance controls, audit reporting and operational risk metrics across AWS environments.",

      footerLink: [
        {
          name: "Cloud Governance"
        }
      ]
    },

    {
      image: require("./assets/images/dataengineeringlogo.png"),

      projectName: "Data Pipeline & Analytics Enablement",

      projectDesc:
        "Supported ingestion, transformation and analytics workflows using Snowflake, SQL and AWS technologies to improve data accessibility, reliability and reporting capabilities.",

      footerLink: [
        {
          name: "Data Platform Engineering"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Professional Highlights And Certifications🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Employee Excellence Award",
      subtitle:
        "Recognized for contributions to Snowflake platform operations and delivery, demonstrating excellence in data engineering and cloud solutions.",
      image: require("./assets/images/excellencelogo.png"),
      imageAlt: "Snowflake Excellence Award Logo",
      footerLink: [
        {name: "Management Recognition", url: ""},
      ]
    },
    {
      title: "Snowflake GenAI Coursera Certification",
      subtitle:
        "Completed and Build a project using Snowflake GenAI and LLMs.",
      image: require("./assets/images/cortexlogo.png"),
      imageAlt: "Snowflake GenAI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/AWHR0F9QXZ2X"
        }
      ]
    },
    {
      title: "Amazon AWS Certified Solutions Architect-Associate",
      subtitle:
        "Certified Solutions Architect - Associate with Amazon Web Services (AWS).",
      image: require("./assets/images/awscertlogo.png"),
      imageAlt: "Aws Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/d4605a41-6b48-4d56-967c-a989688df6d3/public_url"
        }
      ]
    },

    {
      title: "Snowflake SnowPro Core Certification",
      subtitle: "Completed Certifcation from Snowflake for Data Warehousing and Snowflake Concepts",
      image: require("./assets/images/snowcertlogo.png"),
      imageAlt: "Snowflake Logo",
      footerLink: [
        {name: "Certification", url: "https://achieve.snowflake.com/edc2bc50-4d30-48f0-a8b5-379d58ca1020#acc.rTZ1FcXh"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me email📧"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "pravallika.methuku@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

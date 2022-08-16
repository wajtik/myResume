import linkedIn from "@salesforce/resourceUrl/linkedIn";
import gitHub from "@salesforce/resourceUrl/gitHub";
import trailhead from "@salesforce/resourceUrl/trailhead";
import myImage from "@salesforce/resourceUrl/myImage";
import mail from "@salesforce/resourceUrl/envelope";
import phone from "@salesforce/resourceUrl/phone";
import address from "@salesforce/resourceUrl/address";

export const PROFILE_IMAGE = myImage;

export const SOCIAL_LINKS = {
  HEADING: "FOLLOW ME",
  LINKS: [
    {
      type: "LinkedIn",
      label: "linkedin/radoslav-biely",
      link: "https://www.linkedin.com/in/radoslav-biely-674383105/",
      icon: linkedIn
    },
    {
      type: "GitHub",
      label: "gitHub/wajtik",
      link: "https://www.github.com/wajtik",
      icon: gitHub
    },
    {
      type: "Trailhead",
      label: "trailhead/rbiely",
      link: "https://trailblazer.me/id/rbiely",
      icon: trailhead
    }
  ]
};
export const USER_DETAILS = {
  HEADING: "CONTACT ME",
  NAME: "Ing. Radoslav Biely",
  ROLE: "JUNIOR SALESFORCE DEVELOPER",
  ADDRESS: "Janovik 162, 082 03 Janovik",
  LOCATION:
    "https://www.google.com/maps/place/082+03+Janov%C3%ADk/@48.8372096,21.2622544,14z/data=!3m1!4b1!4m5!3m4!1s0x473ee63bf3fac421:0x400f7d1c6975850!8m2!3d48.8359387!4d21.2855172",
  EMAIL: "radoslav.biely@gmail.com",
  PHONE: "+421 915 825 461",
  EMAIL_ICON: mail,
  PHONE_ICON: phone,
  HOME_ICON: address
};

export const EXPERIENCE_DATA = {
  HEADING: "EXPERIENCES",
  EXPERIENCES: [
    {
      ROLE: "JUNIOR SALESFORCE DEVELOPER",
      COMPANY_NAME: "Green Fox Academy",
      DURATION: "02/2022 - 07/2022",
      DESCRIPTION: [
        "Working on analyzing, story pointing and implementing the user stories",
        "Basic experience in SFDC development in implementing Apex classes, Apex Test classes, Apex Triggers, Visual force pages and LWC",
        "Good Experience with SFDC Administrative tasks like creation profiles, roles, users, page layouts, email templates, workflows, approvals, validation rules, reports and dashboards",
        "Ability to write SOQL and SOSL queries accross multiple objects",
        "Good experience in using Visal Studio Code with SF enabled plugin for implementing Apex programing language using cloud platform",
        "Experience in using Git / GitHub and JIRA",
        "Experience with technologies including HTML5, CSS3, JavaStript, JSON, REST API and OOP(JAVA)"
      ]
    },
    {
      ROLE: "SUPPLIER QUALITY ASSURANCE ENGENEER",
      COMPANY_NAME: "Faurecia Slovakia s.r.o., Kosice",
      DURATION: "03/2012 - 12/2021",
      DESCRIPTION: [
        "Trained and managed team of 4 people on QUA department",
        "Supported new product launches to ensure that supplier quality meets the required standards",
        "Issued complaints, reviewed and managed the supplier containment and corrective actions",
        "Conducted onsite supplier audits as scheduled or as needed",
        "Worked directly with all 45 vendors to improve product quality, performance and reliability",
        "Organized and led various supplier´s meetings concerning escalation, communication of quality expectation"
      ]
    }
  ]
};

export const EDUCATION_DATA = {
  HEADING: "EDUCATION",
  SCHOOL_TYPES: [
    {
      SCHOOL_NAME: "Technical University of Kosice",
      DURATION: "2004 - 2011",
      FIELD: "Integrated Management Systems of Quality of Production"
    },
    {
      SCHOOL_NAME: "High School of Bussiness Academy",
      DURATION: "2000 - 2004"
    }
  ]
};
export const SKILLS_DATA = {
  HEADING: "SKILLS",
  SKILLS: [
    {
      HEADING: "FRONTEND",
      SKILLS_LIST: [
        { NAME: "HTML5", LEVEL: "50" },
        { NAME: "CSS3", LEVEL: "50" },
        { NAME: "JavaScript", LEVEL: "25" }
      ]
    },
    {
      HEADING: "BACKAND",
      SKILLS_LIST: [
        { NAME: "JAVA", LEVEL: "25" },
        { NAME: "APEX", LEVEL: "25" },
        { NAME: "SOQL/SOSL", LEVEL: "25" }
      ]
    },
    {
      HEADING: "CRM",
      SKILLS_LIST: [{ NAME: "SALESFORCE", LEVEL: "50" }]
    }
  ]
};

export const LANGUAGES_DATA = {
  HEADING: "LANGUAGES",
  LANGUAGES: [
    { NAME: "Slovak (Native)", LEVEL: "100" },
    { NAME: "English", LEVEL: "70" }
  ]
};

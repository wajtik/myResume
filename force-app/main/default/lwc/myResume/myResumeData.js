import linkedIn from '@salesforce/resourceUrl/linkedIn';
import gitHub from '@salesforce/resourceUrl/gitHub';
import trailhead from '@salesforce/resourceUrl/trailhead';
import myImage from '@salesforce/resourceUrl/myImage';

export const PROFILE_IMAGE = myImage

export const SOCIAL_LINKS = [
    {
        type: 'linkedIn',
        label: "linkedin/radoslav-biely-674383105",
        link: "https://www.linkedin.com/in/radoslav-biely-674383105/",
        icon: linkedIn    
    },
    {
        type: 'gitHub',
        label: "gitHub/wajtik",
        link: "https://www.github.com/wajtik",
        icon: gitHub   
    },
    {
        type: 'trailhead',
        label: "trailhead/rbiely",
        link: "https://trailblazer.me/id/rbiely",
        icon: trailhead   
    }
]
export const USER_DETAILS = {
    NAME: 'Ing. Radoslav Biely',
    ROLE: 'Junior Salesforce Developer',
    ADDRESS: 'Janovik 162, 082 03 Janovik',
    EMAIL: 'radoslav.biely@gmail.com',
    PHONE: '+421 915 825 461'
}
   
export const EXPERIENCE_DATA = {
    HEADING: 'Experience',
    EXPERIENCES:[
        {
            ROLE:"JUNIOR SALESFORCE DEVELOPER",
            COMPANY_NAME: "Green Fox Academy",
            DURATION: "02/2022 - 07/2022",
            DESCRIPTION: [
                "Working on Analyzing, story pointing and implementing the user stories",
                "Basic experience in SFDC development in implementing Apex classes, Apex Test classes, Apex Triggers, Visual force pages and LWC",
                "Good Experience with SFDC Administrative tasks like creation profiles, roles, users, page layouts, email templates, workflows, approvals, validation rules, reports and dashboards",
                "Ability to write SOQL and SOSL queries accross multiple objects",
                "Good experience in using Visal Studio Code with SF enabled plugin for implementing Apex programing language using cloud platform",
                "Experience in using GIT and JIRA",
                "Experience with technologies including HTML5, CSS3, JavaStript, JSON, REST API and OOP(JAVA)"  
            ],
        },
        {
            ROLE:"SUPPLIER QUALITY ASSURANCE ENGENEER",
            COMPANY_NAME: "Faurecia Slovakia s.r.o., Kosice",
            DURATION: "03/2012 - 12/2021",
            DESCRIPTION: [
                "Trained and managed team of 4 people on QUA department", 
                "Supported new product launches to ensure that supplier quality meets the required standards",
                "Issued complaints, reviewed and managed the supplier containment and corrective actions",
                "Conducted onsite supplier audits as scheduled or as needed",
                "Worked directly with all 45 vendors to improve product quality, performance and reliability",
                "Organized and led various supplier´s meetings concerning escalation, communication of quality expectation"
            ],
        }
    ],  
}

export const EDUCATION_DATA = {
    HEADING: 'Education',
    SCHOOL_TYPES: [
        {
            SCHOOL_NAME:"Technical University of Kosice",
            DEGREE: "Ing.",
            DURATION: "2004 - 2011",
            FIELD: "Integrated Management Systems of Quality of Production"

        },
        {
            SCHOOL_NAME:"High School of Bussiness Academy",
            DEGREE: "in Poprad, Slovakia",
            DURATION: "2000 - 2004"
        }
    ],
}
export const SKILLS = {
    LANGUAGES: "English",
    SKILS: ['HTML','JAVA']
}
   

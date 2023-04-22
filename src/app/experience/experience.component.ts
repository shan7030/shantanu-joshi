import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceList = [
    {
      companyName: 'DeepIntent',
      companyLink: 'https://www.deepintent.com/',
      companyLocation: 'Pune, India',
      position: 'Senior Software Engineer',
      duration: 'May 21 - Present',
      workItems: [
        'Responsible for the development of efficient features in healthcare adtech platforms by following agile methodologies from scratch',
        'Contributed to modernizing the UI components across all the products and migrating existing node.js service to spring boot',
        'Worked on various research task POCs, creating design documents for new business features and developing standard pattern lib',
        'Revamped the existing data grid with ag-grid, worked on virtualised lists, pagination, react-beautiful-dnd, lazy loading and infinite scroll to improve the application performance significantly',
        'Responsible for taking interviews and making potential hiring decisions',
        'Previously working as a product-line head, responsible for gathering requirements, determining technical feasibility, developing proof of concepts based on research findings and implementing those features.',
      ],
      technologyUsed: [
        'React',
        'Javascript',
        'Typescript',
        'Spring Boot',
        'Java',
        'GraphQL',
        'Apollo GraphQL',
        'Semantic Versioning',
        'Github',
        'Postman',
        'Insomnia',
        'Microservices',
      ],
    },
    {
      companyName: 'SMS Digital',
      companyLink: 'https://www.sms-digital.com/en/',
      companyLocation: 'Pune, India',
      position: 'Full Stack Developer',
      duration: 'July 20 - May 21',
      workItems: [
        'Responsible for creating a scalable Product known as Cracks Preventer, heavily involved in creating System Design and architecture from scratch',
        'Developed a real-time alert system to depict ML predictions with 50ms precision using Server sent events and WebSocket APIs',
        'Created backend python services to scale web socket requests, also added user authentication and authorisation',
        'Worked with Product managers and UI/UX Designers to create design standards for the company',
        'Accoladed with Sprint Champion title for 3 consecutive Sprints in 2021 and Best Performer title for Quarter 4 2020 at SMS Digital',
        'Responsible for taking interviews and making potential hiring decisions',
      ],
      technologyUsed: [
        'Angular',
        'Python',
        'Javascript',
        'Java',
        'FastAPI',
        'SQLAlchemy ORM',
        'WebSockets',
        'Server sent events',
        'AWS',
        'Jenkins',
        'RESTful API',
        'Flask',
        'APScheduler',
        'Celery',
        'Microservices',
        'Docker',
      ],
    },
    {
      companyName: 'SMS Digital',
      companyLink: 'https://www.sms-digital.com/en/',
      companyLocation: 'Pune, India',
      position: 'Full Stack Development Intern',
      duration: 'Feb 20 – June 20',
      workItems: [
        'Implemented Full Stack Web application for analysis of the throughput of various metals and their grades',
        'Responsible for developing both React Frontend and Python Backend services along with User Authentication',
        'Migrated existing Angular UI to React',
        'Performed analysis on running queries parallelly and concurrently to considerably improve execution time',
      ],
      technologyUsed: [
        'Angular',
        'React',
        'Python',
        'FastAPI',
        'SQLAlchemy ORM',
        'Async Databases',
        'REST',
      ],
    },
    {
      companyName: 'Geeks for Geeks',
      companyLink: 'https://www.geeksforgeeks.org/',
      companyLocation: 'India',
      position: 'Technical Content Writer Intern',
      duration: 'May 20 – Oct 20',
      workItems: [
        'Wrote various articles on Geeks for Geeks based on Competitive Programming, Data Structure, Algorithms, Machine Learning, Deep Learning, Neural Networks, Frameworks and other Emerging concepts',
        'Improved quality of existing articles, also fixed incorrect information',
      ],
      technologyUsed: [
        'Angular',
        'Python',
        'FastAPI',
        'Sequelize',
        'Async DB',
        'Atomics CSS',
        'Angular Material',
        'Firebase',
        'ML',
        'Deep Learning',
        'Convolution Neural Network',
      ],
    },
    {
      companyName: 'SMS Digital',
      companyLink: 'https://www.sms-digital.com/en/',
      companyLocation: 'Dusseldorf, Germany',
      position: 'Bachelor’s Project Intern',
      duration: 'Dec 19 – Feb 20',
      workItems: [
        'Won an opportunity to work on this project in the Dusseldorf Head Office, Germany for 2 months',
        'Developed Full Stack Web application to perform analysis on Demand Forecast made by ML Models',
        'The user can switch ML Models and see the forecasts on time-series data along with model performance',
        'Scheduled Cronjobs to re-train the ML models weekly',
        'Pre-processed and analyzed time-series data',
        'Improved training performance by running multiple queries in parallel',
      ],
      technologyUsed: [
        'Angular',
        'ApexCharts',
        'HighCharts',
        'SCSS',
        'NodeJS',
        'Express',
        'PostgreSQL',
        'node-pg',
        'Sequelize',
        'Python',
        'Docker',
        'Cronjobs',
      ],
    },
    {
      companyName: 'Siemens',
      companyLink: 'https://www.siemens.com/global/en.html',
      companyLocation: 'Pune, India',
      position: 'Summer Intern',
      duration: 'Dec 19 – Feb 20',
      workItems: [
        'Won an opportunity to work in Core Software Developer Team based on Angular Code Sprint',
        'Developed a Limit Administration Portal to create the workflow between Administrator and Client',
        'Using the portal Client gets notified when consumed 80% of resources for a service and can request more resources',
        'An administrator can provide more resources to the requested service',
      ],
      technologyUsed: [
        'Siemens Apollo Web Framework',
        'Angular',
        'Typescript',
        'Gitlab',
        'GraphQL',
        'Microservices',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

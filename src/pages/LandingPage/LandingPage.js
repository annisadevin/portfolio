import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import LatestProjectVideo from '../../components/LatestProjectVideo/LatestProjectVideo';
import Projects from '../../components/Projects/Projects';
import './LandingPage.css';
import Project from '../../components/Project/Project';
import sikonde1 from './assets/Sikonde1.svg'
import sikonde2 from './assets/Sikonde2.svg'
import sikonde3 from './assets/Sikonde3.svg'
import sikonde4 from './assets/Sikonde4.svg'
import sikonde5 from './assets/Sikonde5.svg'
import sikonde6 from './assets/Sikonde6.svg'
import sikonde7 from './assets/Sikonde7.svg'
import walkiddie1 from './assets/Walkiddie1.svg'
import walkiddie2 from './assets/Walkiddie2.svg'
import walkiddie3 from './assets/Walkiddie3.svg'
import walkiddie4 from './assets/Walkiddie4.svg'
import clothrash1 from './assets/Clothrash1.svg'
import clothrash2 from './assets/Clothrash2.svg'
import clothrash3 from './assets/Clothrash3.svg'
import clothrash4 from './assets/Clothrash4.svg'
import clothrash5 from './assets/Clothrash5.svg'
import remindMe1 from './assets/RemindMe1.svg'
import remindMe2 from './assets/RemindMe2.svg'
import remindMe3 from './assets/RemindMe3.svg'
import ePacil1 from './assets/ePacil1.svg'
import ePacil2 from './assets/ePacil2.svg'
import ePacil3 from './assets/ePacil3.svg'
import ePacil4 from './assets/ePacil4.svg'
import panpacation1 from './assets/Panpacation1.svg'
import panpacation2 from './assets/Panpacation2.svg'
import panpacation3 from './assets/Panpacation3.svg'
import panpacation4 from './assets/Panpacation4.svg'
import siruco1 from './assets/Siruco1.svg'
import siruco2 from './assets/Siruco2.svg'
import siruco3 from './assets/Siruco3.svg'
import siruco4 from './assets/Siruco4.svg'
import turnBasedImpact1 from './assets/TurnBasedImpact1.svg'
import turnBasedImpact2 from './assets/TurnBasedImpact2.svg'
import braincil1 from './assets/Braincil1.svg'
import braincil2 from './assets/Braincil2.svg'
import braincil3 from './assets/Braincil3.svg'
import braincil4 from './assets/Braincil4.svg'

const LandingPage = () => {
    const projectsData = [
        {
            "title" : "SIKONDE",
            "descriptions" : [
                "Conducted discussions with Depok city government, app testing with Depok city citizens, psychologist, and government, and accompanied the teaser launching of SIKONDE, an Android-based mental health application that emphasizes family perspectives as its unique value",
                "Performed requirement analysis with functional and behavioral modeling, designed architectural, UI/UX, and EER diagram, and implemented 14 use cases including authentication, mood tracking, gratitude journal, medical record, the implementation of family perspectives, and other features using mobile programming with Flutter and Firebase (Firebase Authentication, Cloud Storage, and Cloud Firestore)"
            ],
            "photos" : [
                {
                    image: sikonde1,
                    caption: "Dashboard Klien"
                },
                {
                    image: sikonde2,
                    caption: "Kelola Peserta"
                },
                {
                    image: sikonde3,
                    caption: "Mood Tracking"
                },
                {
                    image: sikonde4,
                    caption: "Chat Psikolog"
                },
                {
                    image: sikonde5,
                    caption: "Testing"
                },
                {
                    image: sikonde6,
                    caption: "Teaser Launching 1"
                },
                {
                    image: sikonde7,
                    caption: "Teaser Launching 2"
                },
            ]
        },
        {
            "title" : "CLOTHRASH",
            "descriptions" : [
                "Initiated and led the development of CLOTHRASH as the 1st cloth waste management system that helps distributing cloth waste from Penabung to cloth waste recycling companies during GEMASTIK XV",
                "Implemented backend and machine learning model by using Django REST, React JS, Jupyter Notebook, Postman"
            ],
            "photos" : [
                {
                    image: clothrash1,
                    caption: ""
                },
                {
                    image: clothrash2,
                    caption: ""
                },
                {
                    image: clothrash3,
                    caption: ""
                },
                {
                    image: clothrash4,
                    caption: ""
                },
                {
                    image: clothrash5,
                    caption: ""
                },
            ],
            "category": "App"
        },
        {
            "title" : "Walkiddie Toys Gen 3",
            "descriptions" : [
                "Led the 1st sprint as Scrum Master and did every scrum events",
                "Designed and implemented 9 product backlog items of this crowdfunding platform including the creation of dashboard, partner income statistic, general meeting of shareholders forum, products, and other features by using Figma, Django REST, React JS, PostgreSQL, CI/CD, Heroku, Netlify, and GCP Storage Buckets",
                "Utilized Test-Driven Development (TDD) with Django unit test and JEST, and maintained code coverage using SonarQube, resulting in 80% coverage in frontend and 95% coverage in backend by the end of 4th sprint"
            ],
            "photos" : [
                {
                    image: walkiddie1,
                    caption: ""
                },
                {
                    image: walkiddie2,
                    caption: ""
                },
                {
                    image: walkiddie3,
                    caption: ""
                },
                {
                    image: walkiddie4,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "RemindMe!",
            "descriptions" : [
                "Developed the reminder and scheduler authentication service using Django REST with simplejwt, Django gRPC, PostgreSQL, and deployed it in GCP",
                "Integrated authentication service with frontend using React JS",
                "Did caching using NGINX and performance testing using Locust"
            ],
            "photos" : [
                {
                    image: remindMe1,
                    caption: ""
                },
                {
                    image: remindMe2,
                    caption: ""
                },
                {
                    image: remindMe3,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "e-Pacil",
            "descriptions" : [
                "Planned, analyzed, and designed the requirements of e-learning in computer science area by creating use case diagram, activity diagram, class diagram, sequence diagram, etc",
                "Implemented authentication, module & video submission, and miniquiz features by using Django"
            ],
            "photos" : [
                {
                    image: ePacil1,
                    caption: ""
                },
                {
                    image: ePacil2,
                    caption: ""
                },
                {
                    image: ePacil3,
                    caption: ""
                },
                {
                    image: ePacil4,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "Panpacation",
            "descriptions" : [
                "Led the three-days development of PANPACATION while joining the Hackathon 4.0 held by BINUS x Tiket.com",
                "Planned, analyzed, and designed the requirements of staycation booking service mainly in architecture and UI/UX",
                "Implemented landing page, authentication, profile, and review features by using Django and PostgreSQL"
            ],
            "photos" : [
                {
                    image: panpacation1,
                    caption: ""
                },
                {
                    image: panpacation2,
                    caption: ""
                },
                {
                    image: panpacation3,
                    caption: ""
                },
                {
                    image: panpacation4,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "SIRUCO",
            "descriptions" : [
                "Took part of ERD and Relational Diagram creation of SIRUCO requirements",
                "Developed SIRUCO database based on diagram with PostgreSQL DBMS and implemented SIRUCO by using Django",
            ],
            "photos" : [
                {
                    image: siruco1,
                    caption: ""
                },
                {
                    image: siruco2,
                    caption: ""
                },
                {
                    image: siruco3,
                    caption: ""
                },
                {
                    image: siruco4,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "Turn Based Impact",
            "descriptions" : [
                "Planned and analyzed this turn based game which is a single player attack and defend game represented by cards and each of them has different skill",
                "Implemented frontend using jQuery and round microservice using SpringBoot which involves design pattern concept, clean code, asynchronous programming, and Test-Driven Development (TDD)",
                "Did microservice profiling using JProfiler and Python requests"
            ],
            "photos" : [
                {
                    image: turnBasedImpact1,
                    caption: ""
                },
                {
                    image: turnBasedImpact2,
                    caption: ""
                },
            ],
            "category": "Web"
        },
        {
            "title" : "Braincil on Action",
            "descriptions" : [
                "Planned and UI/UX design this learning by asking and answering platform. Besides, there are other side features such as to-do list and anonymous message sending",
                "Implemented authentication, profile, to-do list, encouraging words and questions page by using Django",
            ],
            "photos" : [
                {
                    image: braincil1,
                    caption: ""
                },
                {
                    image: braincil2,
                    caption: ""
                },
                {
                    image: braincil3,
                    caption: ""
                },
                {
                    image: braincil4,
                    caption: ""
                },
            ],
            "category": "Web"
        },

    ]

    return (
        <div>
            <Home />
            <About />
            <LatestProjectVideo />
            <Project projectData={projectsData[0]} />
            <Projects projectsData={projectsData}/>
        </div>
    );
}

export default LandingPage;
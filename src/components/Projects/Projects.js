import './Projects.css'
import foto from '../About/Foto2.svg';
import CardProject from '../CardProject/CardProject';

const Projects = ({ projectsData }) => {
    const projectCards = projectsData.map(function(projectData, index) {
            return <CardProject projectData={projectData}></CardProject>;
        }
    );
    return(
        <div id='background'>
            <div id="portfolio" class="portfolio">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>Mobile App and Web Development</p>
                    </div>

                    {/* <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                        </div>
                    </div> */}

                    <div class="row portfolio-container">

                        {projectCards}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
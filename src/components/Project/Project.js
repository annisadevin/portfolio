import { useLocation } from 'react-router-dom';
import CustomCarousel from '../Carousel/CustomCarousel';
import './Project.css'

const Project = ({ projectData }) => {
    const location = useLocation();
    console.log("LOCATION");
    console.log(location);
    function getData(){
        if (location.state!=null){
            return location.state.data;
        } else {
            return projectData;
        }
    }
    console.log(getData());
    const projectDescriptions = getData().descriptions.map(function(description) {
            return <p>{description}</p>;
        }
    );

    return(
        <div id="background">
            <div className="latest-project container">
                <div className="section-title">
                    <h2>Latest Project</h2>
                </div>
                <div className="background-carousel">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <CustomCarousel carouselData={getData().photos} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>{getData().title}</h3>
                            {projectDescriptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
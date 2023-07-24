
import CustomCarousel from '../Carousel/CustomCarousel';
import './LatestProjectVideo.css'

const LatestProjectVideo = () => {
    return(
        <div id="background">
            <div className="latest-project-video container">
                <div className="section-title">
                    <h2>Latest Project Demo</h2>
                </div>
                <div className="video-responsive">
                    <iframe
                    src={"https://www.youtube.com/embed/gSELOo_9Hf4"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
    );
}

export default LatestProjectVideo;
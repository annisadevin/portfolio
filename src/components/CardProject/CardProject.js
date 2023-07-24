import './CardProject.css'
import { Link } from 'react-router-dom';

const CardProject = ({ projectData }) => {
    return(
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={projectData.photos[0].image} class="img-fluid" alt="" />
            <div class="portfolio-info">
              <div class="portfolio-links">
                <Link to="/project" state={{data: projectData}} data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <h4>{projectData.title}</h4>
                </Link>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CardProject;
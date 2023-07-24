import './About.css';
import foto from './Foto2.svg';

const About = () => {
    return (
        <div id='background'>
            <div className="about-me container">
                <div class="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={foto} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Hello there...</h3>
                        <p className="fst-italic">
                            As a final-year Computer Science student at University of Indonesia, I am passionate about mobile and website development. I have experience in software engineering projects and have also taken on leadership roles within teams. I like approaching problem-solving in a structured and analytical manner. Additionally, I possess persistence, optimism, respectfulness, openness to feedback, collaborative skills, and a genuine eagerness to learn new things.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
import { SocialIcon } from 'react-social-icons';
import './Home.css';

const Home = () => {
    return (
        <div id="header">
            <div className="container">
                <h1>Annisa Devi Nurmalasari</h1>
                <h2>I have enthusiasm for <span>mobile app and web development</span></h2>

                <div className="social-links">
                    <SocialIcon url="https://www.linkedin.com/in/annisadevin" />
                    <SocialIcon url="https://github.com/annisadevin/" />
                    <SocialIcon url="https://gitlab.com/ichadevii" />
                    <SocialIcon url="https://medium.com/@annisadevin" />
                </div>
            </div>
        </div>
    );
}

export default Home;
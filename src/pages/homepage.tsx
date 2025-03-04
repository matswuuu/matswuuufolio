import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";

import "./styles/homepage.css";
import AllProjects from "../components/projects/allProjects.tsx";
import Footer from "../components/common/footer.tsx";
import BIO from "../data/bio.ts";
import selfImage from "../assets/self.png"
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
    return (
        <>
            <div className="page-content">
                <div className="content-wrapper">
                    <div className="header"/>

                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">{BIO.name}</div>
                                <div className="subtitle homepage-subtitle">{BIO.description}</div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="self-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src={selfImage}
                                            alt="about"
                                            className="self-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-socials">
                            <a href={"https://github.com/matswuuu"} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
                            </a>
                            <a href={"https://t.me/matswuuu"} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTelegram} className="homepage-social-icon"/>
                            </a>
                            <a
                                href={`mailto:matswuuu@gmail.com`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faMailBulk}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="homepage-projects">
                        <AllProjects/>
                    </div>

                    {/*<div className="homepage-after-title">*/}
                    {/*    <JobList/>*/}
                    {/*</div>*/}

                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;

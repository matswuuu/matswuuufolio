import React, {JSX, useEffect, useRef} from "react";
// import { Helmet } from "react-helmet";

// import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import Logo from "../components/common/";
// import Footer from "../components/common/footer";
// import NavBar from "../components/common/navBar";
// import Article from "../components/homepage/article";
// import Works from "../components/homepage/works";
// import AllProjects from "../components/projects/allProjects";
//
// import INFO from "../data/user";
// import SEO from "../data/seo";
// import myArticles from "../data/articles";

import "./styles/homepage.css";
import AllProjects from "../components/projects/allProjects.tsx";
import Footer from "../components/common/footer.tsx";
import JobList from "../components/homepage/job-list.tsx";

const Homepage = () => {
	// const [stayLogo, setStayLogo] = useState(false);
	// const [logoSize, setLogoSize] = useState(80);
	// const [oldLogoSize, setOldLogoSize] = useState(80);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	// useEffect(() => {
		// const handleScroll = () => {
		// 	let scroll = Math.round(window.pageYOffset, 2);
		//
		// 	let newLogoSize = 80 - (scroll * 4) / 10;
		//
		// 	if (newLogoSize < oldLogoSize) {
		// 		if (newLogoSize > 40) {
		// 			setLogoSize(newLogoSize);
		// 			setOldLogoSize(newLogoSize);
		// 			setStayLogo(false);
		// 		} else {
		// 			setStayLogo(true);
		// 		}
		// 	} else {
		// 		setLogoSize(newLogoSize);
		// 		setStayLogo(false);
		// 	}
		// };
		//
		// window.addEventListener("scroll", handleScroll);
		// return () => window.removeEventListener("scroll", handleScroll);
	// }, [logoSize, oldLogoSize]);

	// const currentSEO = SEO.find((item) => item.page === "home");

	// const logoStyle = {
	// 	display: "flex",
	// 	position: stayLogo ? "fixed" : "relative",
	// 	top: stayLogo ? "3vh" : "auto",
	// 	zIndex: 999,
	// 	border: stayLogo ? "1px solid white" : "none",
	// 	borderRadius: stayLogo ? "50%" : "none",
	// 	boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	// };

	return (
		<React.Fragment>
			<div className="page-content">
				<div className="content-wrapper">
					<div className="header">
						{/*<div style={logoStyle}>*/}
						{/*	<Logo width={logoSize} link={false} />*/}
						{/*</div>*/}
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{"homepage.title"}
								</div>

								<div className="subtitle homepage-subtitle">
									{"homepage.description"}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="self-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQka8yNW6FjoZ4hmV3lHVHBrZdipcvYHKvHHw&s"
											alt="about"
											className="self-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={"github"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							{/*<a*/}
							{/*	href={`mailto:${"mail"}`}*/}
							{/*	target="_blank"*/}
							{/*	rel="noreferrer"*/}
							{/*>*/}
							{/*	<FontAwesomeIcon*/}
							{/*		icon={faMailBulk}*/}
							{/*		className="homepage-social-icon"*/}
							{/*	/>*/}
							{/*</a>*/}
						</div>

						{/*<div className="homepage-projects">*/}
						{/*	<AllProjects />*/}
						{/*</div>*/}

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							{/*<div className="homepage-works">*/}
								<JobList />
							{/*</div>*/}
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

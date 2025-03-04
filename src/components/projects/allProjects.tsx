import "./styles/allProjects.css";
import Project from "./project.tsx"
import "./projects-list.css"
import PROJECTS from "../../data/projects.ts";

const AllProjects = () => {
	return (
		<div className="border projects-list">
			{PROJECTS.map((project) => (
				<Project
					title={project.name}
					description={project.description}
					link={project.link}
					logo={project.logo}
				/>
			))}
		</div>
	);
};

export default AllProjects;

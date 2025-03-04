import "./styles/project.css";

type ProjectProps = {
	title: string;
	description: string;
	link?: string;
	logo?: string;
}

const Project = (props: ProjectProps) => {
	return (
		<div className="project border">
			{/*<Link to={link}>*/}
				{props.logo &&
					(<div className="project-logo">
						<img src={props.logo} alt="logo"/>
					</div>)
				}
				<div className="project-title">{props.title}</div>
				<div className="project-description">{props.description}</div>
				<div className="project-link">{props.link}</div>
			{/*</Link>*/}
		</div>
	);
};

export default Project;

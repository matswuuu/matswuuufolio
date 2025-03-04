type ProjectProps = {
	title: string;
	description: string;
	link?: string;
	logo?: string;
}

const Project = (props: ProjectProps) => {
	return (
		<div className="project border">
			{props.logo &&
				(<div className="project-logo">
					<img src={props.logo} alt="logo"/>
				</div>)
			}
			<a href={props.link} className="project-title">{props.title}</a>
			<div className="project-description">{props.description}</div>
		</div>
	);
};

export default Project;

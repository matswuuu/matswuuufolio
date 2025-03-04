import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type JobProps = {
    icon: IconProp,
    title: string,
    body: string,
}

const Job = (props: JobProps) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-header">
                    <div className="card-icon">
                        <FontAwesomeIcon icon={props.icon} />
                    </div>
                    <div className="card-title">{props.title}</div>
                </div>
                <div className="card-body">
                    <div className="card-text">{props.body}</div>
                </div>
            </div>
        </div>
    );
};

export default Job;

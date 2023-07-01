import {ReactElement} from "react";

type CardProps = {
    children?: ReactElement,
    classes?: string,
}
const Card: React.FC<CardProps> = props => {
    const {classes} = props
    return <div className={classes}>{props.children}</div>
};

export default Card;
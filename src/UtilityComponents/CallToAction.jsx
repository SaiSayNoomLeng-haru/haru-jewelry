import classNames from "classnames";
import { Link } from "react-router";

export default function CallToAction({desc, linkTo, className = ''}){

    const ctaLink = classNames(
        'py-2 text-center font-semibold',className
    )
    return(
        <Link to={linkTo} className={ctaLink}>
            {desc}
        </Link>
    )
}
import classNames from "classnames";
import { memo } from "react";
import { useRouteError } from "react-router"

const ErrorBoundary = () => {
    const error = useRouteError();
    
    // classes and styles
    const ErrorElement = classNames(
        'flex flex-col justify-center items-center'
    )
    return(
        <section className={ErrorElement}>
            <h1>An error occured!</h1>
            <p>{error.statusText}</p>
            <pre>{error.status}</pre>
        </section>
    )
}

export default memo(ErrorBoundary)
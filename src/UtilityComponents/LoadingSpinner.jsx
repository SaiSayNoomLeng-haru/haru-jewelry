import { memo } from "react"
import classNames from "classnames"

const LoadingSpinner = () => {

    // classes and styles
    const loadingSpinner = classNames(
        'flex justify-center items-center min-h-screen'
    )
    return(
        <div className={loadingSpinner}>
            <img 
                src="/assets/images/loading-spinner.svg" 
                className="w-[100px]"
                />
        </div>
    )
}

export default memo(LoadingSpinner)